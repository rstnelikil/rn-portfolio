import data from "../data/experience.json";
import ExperienceCard from "../components/ExperienceCard";
import Breadcrumb from "../components/Breadcrumb";
import ContactCard from "../components/ContactCard";
import { Link } from "react-router-dom";

export default function Experience() {
    const { experience } = data;

    return (
        <main className="min-h-screen bg-indigo-50/30">
            <header className="max-w-5xl mx-auto px-6 pt-10 pb-6">
                {/* Breadcrumb inserted here */}
                <Breadcrumb items={[{ to: "/", label: "Home" }, { label: "Experience" }]} />

                <div className="mt-4">
                    <h1 className="text-3xl font-semibold tracking-tight">Experience</h1>
                    <p className="mt-2 text-gray-700">
                        A blend of business impact and technical depth across supply chain and healthcare.
                    </p>
                </div>
            </header>

            <section className="max-w-5xl mx-auto px-6 pb-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {experience.map((job, idx) => (
                        <ExperienceCard key={idx} id={job.id} {...job} />
                    ))}
                </div>
            </section>

            <ContactCard />
        </main>
    );
}