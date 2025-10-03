import {
    // Banners
    SparklesIcon as SparklesSolid,
} from "@heroicons/react/24/solid";

import {
    CheckBadgeIcon,
    LightBulbIcon as LightBulbOutline,
    PuzzlePieceIcon,
    PresentationChartLineIcon,
    UsersIcon,
    RocketLaunchIcon,
    EnvelopeIcon,
    PhoneIcon,
    GlobeAltIcon,
    WrenchScrewdriverIcon,
    BanknotesIcon,
    CpuChipIcon,
    BuildingOffice2Icon,
    UserGroupIcon,
    CubeIcon,
    CodeBracketIcon,
    ArrowsRightLeftIcon,
    CloudIcon,
    BriefcaseIcon,
} from "@heroicons/react/24/outline";

import AccordionSection from "../components/AccordionSection";
import ResumeUpdateNote from "../components/ResumeUpdateNote";
import heroTech from "../assets/images/home/hero-tech.jpg";
import contactBg from "../assets/images/home/contact.jpg";

export default function Home() {
    return (
        <main className="min-h-screen bg-indigo-50/30">
            {/* Hero Section with background image */}
            <section className="relative">
                <div
                    className="relative bg-cover bg-center"
                    style={{ backgroundImage: `url(${heroTech})` }}
                >
                    {/* Overlay for readability */}
                    <div className="absolute inset-0 bg-black/30"></div>

                    {/* Content */}
                    <div className="relative h-[220px] md:h-[260px] flex items-center">
                        <div className="max-w-7xl mx-auto px-6 lg:px-8">
                            <div className="text-white">
                                <h1 className="text-3xl md:text-4xl font-bold">Ramesh Nelikil</h1>
                                <p className="text-sm md:text-base mt-2 opacity-90">
                                    Strategic Technology &amp; Business Leader
                                </p>
                                <div className="mt-4 flex gap-3">
                                    <a
                                        href="https://linkedin.com/in/ramesh-nelikil"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-primary"
                                    >
                                        LinkedIn
                                    </a>
                                    <a href="/rameshnelikil.pdf" className="btn btn-secondary">
                                        Download Resume
                                    </a>
                                    <a href="/experience" className="btn btn-primary">
                                        My Journey
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Skills Section */}
            <section className="section-container">
                <div className="section-surface bg-gradient-to-r from-indigo-50 to-indigo-100 py-10 px-6">
                    <h2 className="text-center text-2xl md:text-3xl font-bold tracking-wide text-indigo-900 mb-8">
                        Core Skills &amp; Strengths
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-4 gap-x-8 justify-items-center">
                        <span className="px-6 py-3 rounded-full text-base md:text-lg font-semibold text-indigo-700 bg-white shadow whitespace-nowrap animate-fade-in delay-100">
                            AI-Led Transformation
                        </span>
                        <span className="px-6 py-3 rounded-full text-base md:text-lg font-semibold text-teal-700 bg-white shadow whitespace-nowrap animate-fade-in delay-200">
                            Platform Modernization
                        </span>
                        <span className="px-6 py-3 rounded-full text-base md:text-lg font-semibold text-indigo-700 bg-white shadow whitespace-nowrap animate-fade-in delay-300">
                            Operational Excellence
                        </span>
                        <span className="px-6 py-3 rounded-full text-base md:text-lg font-semibold text-amber-700 bg-white shadow whitespace-nowrap animate-fade-in delay-400">
                            Architecture &amp; Design
                        </span>
                        <span className="px-6 py-3 rounded-full text-base md:text-lg font-semibold text-slate-700 bg-white shadow whitespace-nowrap animate-fade-in delay-500">
                            Global Collaboration
                        </span>
                        <span className="px-6 py-3 rounded-full text-base md:text-lg font-semibold text-indigo-700 bg-white shadow whitespace-nowrap animate-fade-in delay-600">
                            Strategic Thinking
                        </span>
                        <span className="px-6 py-3 rounded-full text-base md:text-lg font-semibold text-teal-700 bg-white shadow whitespace-nowrap animate-fade-in delay-700">
                            Product Roadmap
                        </span>
                        <span className="px-6 py-3 rounded-full text-base md:text-lg font-semibold text-indigo-700 bg-white shadow whitespace-nowrap animate-fade-in delay-800">
                            Servant Leadership
                        </span>
                    </div>
                </div>
            </section>

            {/* My Approach — upgraded to icon-card grid */}
            <section className="relative pt-10">
                <AccordionSection
                    title="My Approach"
                    icon={<LightBulbOutline className="h-8 w-8" />}
                    size="lg"
                >
                    {/* Colored panel background for the tiles */}
                    <div className="tile-panel">
                        {/* Two-column responsive grid with staggered animations */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {/* Accountability — indigo */}
                            <div className="flex items-start gap-3 rounded-xl bg-indigo-50 ring-1 ring-indigo-200/70 p-4 shadow-sm hover:shadow-md transition hover:-translate-y-0.5 animate-on-open a-delay-100">
                                <span className="rounded-lg bg-indigo-100 p-2 text-indigo-700">
                                    <CheckBadgeIcon className="h-6 w-6" />
                                </span>
                                <p className="text-indigo-900">
                                    <span className="font-semibold">Demonstrate Accountability</span> — Commit fully to every role and deliver results with ownership and integrity.
                                </p>
                            </div>

                            {/* Strategic Thinking — teal */}
                            <div className="flex items-start gap-3 rounded-xl bg-teal-50 ring-1 ring-teal-200/70 p-4 shadow-sm hover:shadow-md transition hover:-translate-y-0.5 animate-on-open a-delay-200">
                                <span className="rounded-lg bg-teal-100 p-2 text-teal-700">
                                    <LightBulbOutline className="h-6 w-6" />
                                </span>
                                <p className="text-teal-900">
                                    <span className="font-semibold">Drive Strategic Thinking</span> — Ask the hard questions, explore the “what” &amp; “why,” and shape direction before execution.
                                </p>
                            </div>

                            {/* Problem Solving — amber */}
                            <div className="flex items-start gap-3 rounded-xl bg-amber-50 ring-1 ring-amber-200/70 p-4 shadow-sm hover:shadow-md transition hover:-translate-y-0.5 animate-on-open a-delay-300">
                                <span className="rounded-lg bg-amber-100 p-2 text-amber-700">
                                    <PuzzlePieceIcon className="h-6 w-6" />
                                </span>
                                <p className="text-amber-900">
                                    <span className="font-semibold">Solve Complex Problems</span> — Apply analytical thinking and curiosity to tackle challenges and deliver scalable solutions.
                                </p>
                            </div>

                            {/* Tech → Impact — slate with indigo accent */}
                            <div className="flex items-start gap-3 rounded-xl bg-slate-50 ring-1 ring-slate-200/70 p-4 shadow-sm hover:shadow-md transition hover:-translate-y-0.5 animate-on-open a-delay-400">
                                <span className="rounded-lg bg-indigo-100 p-2 text-indigo-700">
                                    <PresentationChartLineIcon className="h-6 w-6" />
                                </span>
                                <p className="text-slate-900">
                                    <span className="font-semibold">Connect Tech to Impact</span> — Use deep technical expertise to drive business outcomes and customer value.
                                </p>
                            </div>

                            {/* Teams — indigo */}
                            <div className="flex items-start gap-3 rounded-xl bg-indigo-50 ring-1 ring-indigo-200/70 p-4 shadow-sm hover:shadow-md transition hover:-translate-y-0.5 animate-on-open a-delay-500">
                                <span className="rounded-lg bg-indigo-100 p-2 text-indigo-700">
                                    <UsersIcon className="h-6 w-6" />
                                </span>
                                <p className="text-indigo-900">
                                    <span className="font-semibold">Build &amp; Empower Teams</span> — Practice servant leadership, coach talent, and create high-performing, accountable cultures.
                                </p>
                            </div>

                            {/* Growth & Collaboration — teal */}
                            <div className="flex items-start gap-3 rounded-xl bg-teal-50 ring-1 ring-teal-200/70 p-4 shadow-sm hover:shadow-md transition hover:-translate-y-0.5 animate-on-open a-delay-600">
                                <span className="rounded-lg bg-teal-100 p-2 text-teal-700">
                                    <RocketLaunchIcon className="h-6 w-6" />
                                </span>
                                <p className="text-teal-900">
                                    <span className="font-semibold">Invest in Growth &amp; Collaboration</span> — Stay ahead of industry trends and build strong global networks.
                                </p>
                            </div>
                        </div>
                    </div>
                </AccordionSection>
            </section>

            {/* Career Highlights */}
            <AccordionSection
                title="Career Highlights"
                icon={<SparklesSolid className="h-6 w-6" />}
            >
                {/* Colored panel background to mirror My Approach */}
                <div className="tile-panel">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* 1) Leadership Excellence — indigo */}
                        <div className="flex items-start gap-3 rounded-xl bg-indigo-50 ring-1 ring-indigo-200/70 p-4 shadow-sm hover:shadow-md transition hover:-translate-y-0.5">
                            <span className="rounded-lg bg-indigo-100 p-2 text-indigo-700">
                                <UserGroupIcon className="h-6 w-6" />
                            </span>
                            <p className="text-indigo-900">
                                <span className="font-semibold">Leadership Excellence</span> — Led global engineering orgs with accountability and high performance.
                            </p>
                        </div>

                        {/* 2) Enterprise Architecture — teal */}
                        <div className="flex items-start gap-3 rounded-xl bg-teal-50 ring-1 ring-teal-200/70 p-4 shadow-sm hover:shadow-md transition hover:-translate-y-0.5">
                            <span className="rounded-lg bg-teal-100 p-2 text-teal-700">
                                <CubeIcon className="h-6 w-6" />
                            </span>
                            <p className="text-teal-900">
                                <span className="font-semibold">Enterprise Architecture</span> — Designed scalable, resilient platforms across healthcare &amp; supply chain.
                            </p>
                        </div>

                        {/* 3) Hands-On Engineering — slate */}
                        <div className="flex items-start gap-3 rounded-xl bg-slate-50 ring-1 ring-slate-200/70 p-4 shadow-sm hover:shadow-md transition hover:-translate-y-0.5">
                            <span className="rounded-lg bg-indigo-100 p-2 text-indigo-700">
                                <CodeBracketIcon className="h-6 w-6" />
                            </span>
                            <p className="text-slate-900">
                                <span className="font-semibold">Hands-On Engineering</span> — Deep foundation from legacy to modern cloud-native development.
                            </p>
                        </div>

                        {/* 4) Digital Transformation — amber */}
                        <div className="flex items-start gap-3 rounded-xl bg-amber-50 ring-1 ring-amber-200/70 p-4 shadow-sm hover:shadow-md transition hover:-translate-y-0.5">
                            <span className="rounded-lg bg-amber-100 p-2 text-amber-700">
                                <ArrowsRightLeftIcon className="h-6 w-6" />
                            </span>
                            <p className="text-amber-900">
                                <span className="font-semibold">Digital Transformation</span> — Drove modernization and platform renewal across mission-critical systems.
                            </p>
                        </div>

                        {/* 5) Business & Product Collaboration — indigo */}
                        <div className="flex items-start gap-3 rounded-xl bg-indigo-50 ring-1 ring-indigo-200/70 p-4 shadow-sm hover:shadow-md transition hover:-translate-y-0.5">
                            <span className="rounded-lg bg-indigo-100 p-2 text-indigo-700">
                                <BriefcaseIcon className="h-6 w-6" />
                            </span>
                            <p className="text-indigo-900">
                                <span className="font-semibold">Business &amp; Product Collaboration</span> — Partnered with product and business leaders to deliver impactful, value-driven solutions.
                            </p>
                        </div>

                        {/* 6) Cloud & AI Adoption — teal */}
                        <div className="flex items-start gap-3 rounded-xl bg-teal-50 ring-1 ring-teal-200/70 p-4 shadow-sm hover:shadow-md transition hover:-translate-y-0.5">
                            <span className="rounded-lg bg-teal-100 p-2 text-teal-700">
                                <CloudIcon className="h-6 w-6" />
                            </span>
                            <p className="text-teal-900">
                                <span className="font-semibold">Cloud &amp; AI Adoption</span> — Championed cloud migrations and AI-enabled platforms to unlock scale.
                            </p>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="flex justify-center mt-6">
                        <a href="/experience" className="btn btn-primary">
                            Dive Into My Journey
                        </a>
                    </div>
                </div>
            </AccordionSection>

            {/* Contact Section */}
            <section
                className="relative h-[220px] md:h-[260px] mt-8"
                style={{ backgroundImage: `url(${contactBg})` }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30" />

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Contact</h2>

                    {/* Contact info rows */}
                    <div className="space-y-2 mb-4">
                        <p className="flex items-center justify-center gap-2">
                            <EnvelopeIcon className="h-5 w-5 text-indigo-300" />
                            <a href="mailto:rstnelikil@gmail.com" className="hover:underline">
                                rstnelikil@gmail.com
                            </a>
                        </p>
                        <p className="flex items-center justify-center gap-2">
                            <PhoneIcon className="h-5 w-5 text-indigo-300" />
                            <a href="tel:+17244073897" className="hover:underline">
                                +1 (724) 407-3897
                            </a>
                        </p>
                    </div>

                    {/* CTA buttons */}
                    <div className="flex space-x-4">
                        <a
                            href="https://www.linkedin.com/in/ramesh-nelikil"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                        >
                            LinkedIn
                        </a>
                        <a href="/rameshnelikil.pdf" className="btn btn-secondary">
                            Download Resume
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}