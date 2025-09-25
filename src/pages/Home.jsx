import headshot from "../assets/headshot.jpeg";
import ContactCard from "../components/ContactCard";
import ResumeUpdateNote from "../components/ResumeUpdateNote";


export default function Home() {
    return (
        <main className="min-h-screen bg-indigo-50/30">
            <section className="max-w-5xl mx-auto px-6 pt-12">
                <div className="bg-gradient-to-r from-teal-50 via-white to-teal-50 rounded-2xl border border-gray-100 shadow-sm p-6 md:p-10">
                    <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-6 items-start">
                        <img
                            src={headshot}
                            alt="Ramesh Nelikil headshot"
                            className="w-40 h-40 rounded-2xl object-cover shadow-sm border border-gray-200"
                        />
                        <div>
                            <h1 className="text-4xl font-semibold tracking-tight">Ramesh Nelikil</h1>
                            <p className="mt-3 text-gray-700 max-w-3xl">
                                Strategic Technology &amp; Business Leader with 25+ years of experience driving engineering and
                                product strategy across healthcare and supply chain. Skilled at overseeing the full product
                                lifecycle, ensuring compliance, operational excellence, and profitable growth. Proven track
                                record of defining product vision, aligning global teams, and delivering AI-enabled, cost-
                                efficient platforms that improve scalability and customer outcomes. Recognized for building
                                high-performing teams and managing budgets with accountability.
                            </p>

                            <div className="mt-6 flex flex-wrap gap-3">
                                <a
                                    href="https://www.linkedin.com/in/ramesh-nelikil/"
                                    target="_blank" rel="noreferrer"
                                    className="btn btn-primary"
                                >
                                    LinkedIn
                                </a>
                                <a
                                    href="/experience"
                                    className="btn btn-primary"
                                >
                                    Profile →
                                </a>
                                <a
                                    href="/rameshnelikil.pdf"
                                    download
                                    className="btn btn-secondary"
                                >
                                    📄 Download Resume
                                </a>
                                <ResumeUpdateNote />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="max-w-5xl mx-auto px-6 mt-6 mb-4">
                <div className="flex flex-wrap gap-2">
                    {/* Indigo (brand authority) */}
                    <span className="inline-block bg-brand-light/20 text-brand-dark px-3 py-1 rounded-full text-xs font-semibold">
                        AI-Led Transformation
                    </span>

                    {/* Teal (fresh energy) */}
                    <span className="inline-block bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-xs font-semibold">
                        Global Delivery & Collaboration
                    </span>

                    {/* Indigo again for emphasis */}
                    <span className="inline-block bg-brand-light/20 text-brand-dark px-3 py-1 rounded-full text-xs font-semibold">
                        Operational Excellence
                    </span>

                    {/* Amber accent pop for $$$ */}
                    <span className="inline-block bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-semibold">
                        Cost Optimization ($1.2M / yr)
                    </span>

                    {/* Slate (professional balance) */}
                    <span className="inline-block bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-xs font-semibold">
                        Platform Modernization
                    </span>
                </div>
            </section>
            {/* Contact / CTAs */}
            <ContactCard />
        </main >
    );
}