import Image from "next/image";

export const HeroImages = () => {
    return (
        <div className="relative w-full h-[400px] flex items-center justify-center">
            <div className="absolute top-10 right-0 w-[320px] md:w-[380px] shadow-2xl rounded-xl overflow-hidden transform rotate-3 translate-x-4 z-10 border border-white/10">
                <Image
                    src="/images/hero-kanban.png" // Remplaza con tu imagen real
                    alt="Kanban Board"
                    width={400}
                    height={300}
                    className="w-full h-auto object-cover"
                />
            </div>

            <div className="absolute top-20 right-10 w-[320px] md:w-[380px] shadow-2xl rounded-xl overflow-hidden transform -rotate-2 translate-y-8 z-20 border border-white/10">
                <Image
                    src="/images/hero-tasks.png" // Remplaza con tu imagen real
                    alt="Tasks List"
                    width={400}
                    height={300}
                    className="w-full h-auto object-cover"
                />
            </div>

            <div className="absolute top-0 left-4 w-[280px] md:w-[300px] shadow-2xl rounded-xl overflow-hidden transform -rotate-3 z-30 border border-white/10">
                <Image
                    src="/images/hero-financial.png" // Remplaza con tu imagen real
                    alt="Financial Snapshot"
                    width={400}
                    height={300}
                    className="w-full h-auto object-cover"
                />
            </div>
        </div>
    )
}
