'use client'

import { Button, Input } from "@components"
import { useTranslations } from "next-intl"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { registerSchema, RegisterFormData } from "@/validations"

export const RegisterForm = () => {
    const t = useTranslations('form');
    const tAuth = useTranslations('auth');
    const tValidations = useTranslations('validations');

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm<RegisterFormData>({
        resolver: zodResolver(registerSchema)
    });

    const onSubmit = async (data: RegisterFormData) => {
        try {
            console.log('Register data:', data);
            // AQUI VA EL ENDPOINT
            // Ejemplo: await fetch('/api/auth/register', { method: 'POST', body: JSON.stringify(data) })
        } catch (error) {
            console.error('Register error:', error);
        }
    };

    return (
        <>
            <Input
                id="name"
                type="text"
                label={t('fullName')}
                placeholder={t('fullNamePlaceholder')}
                register={register('name')}
                error={errors.name?.message ? tValidations(errors.name.message as any) : undefined}
            />
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
            <Input
                id="confirm-password"
                type="password"
                label={t('confirmPassword')}
                placeholder={t('passwordPlaceholder')}
                register={register('confirmPassword')}
                error={errors.confirmPassword?.message ? tValidations(errors.confirmPassword.message as any) : undefined}
            />
            <Button primary type="submit" onClick={handleSubmit(onSubmit)} disabled={isSubmitting}>
                {isSubmitting ? '...' : tAuth('register')}
            </Button>
        </>
    )
}
