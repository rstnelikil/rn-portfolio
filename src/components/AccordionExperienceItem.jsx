// src/components/AccordionExperienceItem.jsx
import { useRef } from "react";

export default function AccordionExperienceItem({
    id,
    company,
    role,
    image,
    imageAlt,
    highlights = [],
    tech = [],
    isOpen = false,
    onToggle = () => { },
}) {
    const rootRef = useRef(null);

    return (
        <article
            id={id}
            ref={rootRef}
            className={`relative rounded-2xl bg-white shadow-md overflow-hidden border border-indigo-100/60
        transition hover:shadow-lg hover:ring-1 hover:ring-indigo-200
        border-l-4 ${isOpen
                    ? "border-l-indigo-500"
                    : "border-l-transparent hover:border-l-indigo-300"
                }`}
        >
            {/* Header */}
            <button
                type="button"
                onClick={onToggle}
                aria-expanded={isOpen}
                className={`w-full flex items-center gap-4 p-4 text-left transition-colors ${isOpen ? "bg-indigo-50" : "bg-white hover:bg-indigo-50/60"
                    }`}
            >
                {image && (
                    <img
                        src={image}
                        alt={imageAlt || `${role} at ${company}`}
                        className="w-20 h-20 object-cover rounded-xl border border-gray-200"
                        onError={(e) => (e.currentTarget.style.display = "none")}
                    />
                )}

                <div className="flex-1 min-w-0">
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 truncate">
                        {role}
                    </h3>
                    <p className="text-sm text-gray-600">{company}</p>
                </div>

                {/* Chevron pill */}
                <div
                    className={`ml-auto grid place-items-center h-8 w-8 rounded-full bg-gray-100 text-gray-700 shadow-sm transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                        }`}
                    aria-hidden="true"
                >
                    <span className="text-base">▼</span>
                </div>
            </button>

            {/* Body */}
            <div
                data-open={isOpen}
                className={`overflow-hidden border-t border-gray-100 transition-[max-height,opacity] duration-500 ease-in-out ${isOpen ? "max-h-[1200px] opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="p-5">
                    {/* Highlights */}
                    {highlights?.length > 0 && (
                        <>
                            <h4 className="text-sm font-semibold text-gray-800 mb-2">
                                Highlights
                            </h4>
                            <ul className="list-disc marker:text-indigo-400 pl-5 text-gray-700 leading-relaxed space-y-1.5 mb-4">
                                {highlights.map((p, i) => (
                                    <li key={i}>{p}</li>
                                ))}
                            </ul>
                        </>
                    )}

                    {/* Tech stack */}
                    {tech?.length > 0 && (
                        <div className="mt-2">
                            <h4 className="text-sm font-semibold text-gray-800 mb-2">
                                Tech Stack
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {tech.map((t, i) => (
                                    <span
                                        key={i}
                                        className="inline-flex items-center gap-1.5
                 rounded-full px-3 py-1.5 text-sm font-medium
                 bg-indigo-50 text-indigo-800
                 ring-1 ring-indigo-200
                 hover:bg-indigo-100 hover:ring-indigo-300
                 transition-colors"
                                        title={t}
                                    >
                                        {/* dot accent */}
                                        <span className="h-1.5 w-1.5 rounded-full bg-indigo-500"></span>
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </article>
    );
}