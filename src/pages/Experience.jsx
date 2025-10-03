// src/pages/Experience.jsx
import { useState } from "react";
import data from "../data/experience.json";
import AccordionExperienceItem from "../components/AccordionExperienceItem";
import Breadcrumb from "../components/Breadcrumb";

export default function Experience() {
    const { experience } = data;
    const [openId, setOpenId] = useState(null);

    // Smoothly scroll the clicked card's header to the very top (with a little padding)
    const handleToggle = (id) => {
        const next = openId === id ? null : id;
        setOpenId(next);

        // Wait for the expand/collapse layout to paint, then measure & scroll
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                const el = document.getElementById(id);
                if (!el) return;

                // Prefer the header button as the anchor to avoid image height variations
                const headerBtn = el.querySelector("button");
                const anchor = headerBtn || el;

                const y = window.scrollY + anchor.getBoundingClientRect().top - 80; // 80px comfortable padding
                window.scrollTo({ top: y, behavior: "smooth" });
            });
        });
    };

    return (
        <main className="min-h-screen bg-indigo-50/30">
            <header className="max-w-5xl mx-auto px-6 pt-10 pb-6">
                <Breadcrumb items={[{ label: "Home", to: "/" }, { label: "My Journey" }]} />
                <h1 className="mt-4 text-3xl font-semibold tracking-tight">My Professional Journey</h1>
                <p className="mt-2 text-gray-700">
                    A blend of business impact and technical depth across supply chain and healthcare.
                </p>
            </header>

            <section className="max-w-5xl mx-auto px-6 pb-16 space-y-6">
                {experience.map((job) => (
                    <AccordionExperienceItem
                        key={job.id}
                        {...job}
                        isOpen={openId === job.id}
                        onToggle={() => handleToggle(job.id)}
                    />
                ))}
            </section>
        </main>
    );
}