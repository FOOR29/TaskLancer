"use server";


import { db } from "@/lib/db";
import { loginSchema, registerSchema } from "@/validations";
import { signIn } from "@main/auth";

import bcrypt from "bcryptjs";
import { AuthError } from "next-auth";

import { z } from "zod";
// Define the login action
export const loginAction = async (data: z.infer<typeof loginSchema>) => {
    try {
        // Call the signIn function from NextAuth
        await signIn('credentials', {
            email: data.email,
            password: data.password,
            redirect: false,

        })
        return { success: true };
    } catch (error: unknown) {
        if (error instanceof AuthError) {
            // Extract the actual error message from the nested structure
            const cause = error.cause as any;
            if (cause?.err?.message) {
                return { error: cause.err.message };
            }
            return { error: error.message ?? "Error de autenticación" };
        }

        // fallback si no es un Error
        return { error: "Error desconocido" };
    }
}


export const registerAction = async (
    values: z.infer<typeof registerSchema>
) => {
    try {
        const { data, success } = registerSchema.safeParse(values);
        if (!success) {
            return {
                error: "Invalid data",
            };
        }

        // verificar si el usuario ya existe
        const user = await db.user.findUnique({
            where: {
                email: data.email,
            },
            include: {
                accounts: true, // Incluir las cuentas asociadas
            },
        });

        if (user) {
            // Verificar si tiene cuentas OAuth vinculadas
            const oauthAccounts = user.accounts.filter(
                (account) => account.type === "oauth"
            );
            if (oauthAccounts.length > 0) {
                return {
                    error:
                        "To confirm your identity, sign in with the same account you used originally.",
                };
            }
            return {
                error: "User already exists",
            };
        }

        // hash de la contraseña
        const passwordHash = await bcrypt.hash(data.password, 10);

        // crear el usuario
        await db.user.create({
            data: {
                email: data.email,
                name: data.name,
                password: passwordHash,
            },
        });

        await signIn("credentials", {
            email: data.email,
            password: data.password,
            redirect: false,
        });

        return { success: true };
    } catch (error) {
        if (error instanceof AuthError) {
            return { error: error.cause?.err?.message };
        }
        return { error: "error 500" };
    }
};