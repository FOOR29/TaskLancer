'use client'

import { Button, Input } from "@components"
import { useTranslations } from "next-intl"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { loginSchema, LoginFormData } from "@/validations"

export const LoginForm = () => {
    const t = useTranslations('form');
    const tAuth = useTranslations('auth');
    const tValidations = useTranslations('validations');

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema)
    });

    const onSubmit = async (data: LoginFormData) => {
        try {
            console.log('Login data:', data);
            // AQUI VA EL ENDPOINT
            // Ejemplo: await fetch('/api/auth/login', { method: 'POST', body: JSON.stringify(data) })
        } catch (error) {
            console.error('Login error:', error);
        }
    };

    return (
        <>
            <Input
                id="email"
                type="email"
                label={t('email')}
                placeholder={t('emailPlaceholder')}
                register={register('email')}
                error={errors.email?.message ? tValidations(errors.email.message as any) : undefined}
            />
            <Input
                id="password"
                type="password"
                label={t('password')}
                placeholder={t('passwordPlaceholder')}
                register={register('password')}
                error={errors.password?.message ? tValidations(errors.password.message as any) : undefined}
            />
            <Button primary type="submit" onClick={handleSubmit(onSubmit)} disabled={isSubmitting}>
                {isSubmitting ? '...' : tAuth('signIn')}
            </Button>
        </>
    )
}
