
import { LanguageSwitcher } from "../ui/LanguageSwitcher"
import { ButtonMode } from "../ui/ButtonMode"
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

const Navbar = () => {
    const t = useTranslations('navbar');
    return (
        <>
            <div className="flex gap-4 p-4 bg-(--bg-1) h-30">
                <ButtonMode />
                <LanguageSwitcher className="relative" />
            </div>
            <div className="w-1/4">
                <h1 className="">{t('welcome')}</h1>
                <Link href="/auth">Start Now</Link>
            </div>
        </>
    )
}

export default Navbar