import { useParams, Link } from "react-router-dom";
import data from "../data/experience.json";
import Breadcrumb from "../components/Breadcrumb";
import ContactCard from "../components/ContactCard";

export default function RoleDetail() {
    const { id } = useParams();
    const job = data.experience.find((e) => e.id === id);

    if (!job) {
        return (
            <main className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
                <div className="text-center">
                    <p className="text-lg font-medium">Role not found.</p>
                    <Link to="/experience" className="text-indigo-600 hover:text-indigo-500 block mt-2">
                        ← Back to Experience
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-indigo-50/30">
            <header className="max-w-5xl mx-auto px-6 pt-10 pb-6">
                {/* Reusable Breadcrumb */}
                <Breadcrumb
                    items={[
                        { to: "/", label: "Home" },
                        { to: "/experience", label: "Experience" },
                        { label: job.role }
                    ]}
                />

                <h1 className="mt-4 text-3xl font-semibold tracking-tight">{job.role}</h1>
                <h2 className="text-md font-medium text-gray-600">{job.company}</h2>
            </header>

            <section className="max-w-5xl mx-auto px-6 pb-16">
                <div className="bg-gradient-to-br from-white via-indigo-50/40 to-white rounded-2xl shadow-md p-6 flex flex-col">
                    {job.image && (
                        <img
                            src={job.image}
                            alt={job.imageAlt}
                            className="w-full h-64 object-cover rounded-xl mb-6"
                            onError={(e) => (e.currentTarget.style.display = "none")}
                        />
                    )}

                    {/* Main content */}
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Highlights</h3>
                        <ul className="list-disc pl-5 text-gray-700 leading-relaxed space-y-1.5 mb-6">
                            {job.highlights.map((p, i) => (
                                <li key={i}>{p}</li>
                            ))}
                        </ul>

                        {job.tech?.length > 0 && (
                            <div className="mt-2">
                                <h4 className="text-sm font-semibold text-gray-800 mb-2">Tech Stack</h4>
                                <div className="flex flex-wrap">
                                    {job.tech.map((t, i) => (
                                        <span
                                            key={i}
                                            className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
            <ContactCard />
        </main>
    );
}