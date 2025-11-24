import Navbar from "@/components/features/Navbar";
import TextsSection from "@/components/features/TextsSection";

export default function Home() {
    return (
        <>
            <header className="sticky top-0 z-50">
                <Navbar />
            </header>
            <main className="min-h-screen bg-(--bg-1) text-(--text-1) transition-colors duration-300">
                <section className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-9 min-h-screen flex justify-center items-center">
                    <TextsSection />
                </section>
            </main>

        </>
    );
}
