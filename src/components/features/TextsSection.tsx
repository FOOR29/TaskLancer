import { FaMoneyBillWave } from "react-icons/fa6";
import { FaFileInvoice } from "react-icons/fa";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { Link } from "@/i18n/routing";
import { HeroImages } from "./HeroImages";

const TextsSection = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                <div className="flex flex-col gap-8">

                    {/* Títulos */}
                    <div className="space-y-6">
                        <h2 className="font-bold text-4xl sm:text-5xl lg:text-6xl text-(--text-1) leading-tight">
                            All your freelance work <br />
                            <span className="text-(--btn-1)">in one place.</span>
                        </h2>
                        <p className="text-lg sm:text-xl text-(--text-2) max-w-lg leading-relaxed">
                            Organize projects, tasks, hours, and invoices without spreadsheets or a thousand tabs open.
                        </p>
                    </div>

                    <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-4 text-(--text-2)">
                            <div className="p-2 rounded-lg bg-(--bg-2) shrink-0">
                                <FaMoneyBillWave className="w-5 h-5 text-(--text-1)" />
                            </div>
                            <h4 className="font-medium text-lg">Create and organize projects in minutes.</h4>
                        </div>

                        <div className="flex items-center gap-4 text-(--text-2)">
                            <div className="p-2 rounded-lg bg-(--bg-2) shrink-0">
                                <RiDashboardHorizontalFill className="w-5 h-5 text-(--text-1)" />
                            </div>
                            <h4 className="font-medium text-lg">Organize your day with simple Kanban boards.</h4>
                        </div>

                        <div className="flex items-center gap-4 text-(--text-2)">
                            <div className="p-2 rounded-lg bg-(--bg-2) shrink-0">
                                <FaFileInvoice className="w-5 h-5 text-(--text-1)" />
                            </div>
                            <h4 className="font-medium text-lg">Generate clear invoices based on your task and hours.</h4>
                        </div>
                    </div>
                </div>

                <div className="relative mt-10 lg:mt-0">
                    <HeroImages />
                </div>
            </div>
        </section>
    )
}

export default TextsSection
