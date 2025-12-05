import { User, Session } from "next-auth"
import { JWT } from "next-auth/jwt"

export type UserRole = "ADMIN" | "FREELANCER"

declare module "next-auth" {
    interface Session {
        user: {
            role: UserRole
        } & Session["user"]
    }

    interface User {
        role: UserRole
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        role: UserRole
    }
}
