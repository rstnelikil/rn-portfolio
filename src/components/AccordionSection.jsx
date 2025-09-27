import { useState } from "react";

export default function AccordionSection({ title, icon, children }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className="max-w-5xl mx-auto my-6 rounded-2xl shadow-md overflow-hidden">
            {/* Header */}
            <button
                type="button"
                onClick={() => setIsOpen((v) => !v)}
                aria-expanded={isOpen}
                className={`w-full flex items-center gap-4 px-6 py-6 text-left transition-colors
          ${isOpen ? "bg-indigo-200" : "bg-indigo-50 hover:bg-indigo-100"}`}
            >
                {/* Icon badge */}
                {icon && (
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-600 text-white">
                        {icon}
                    </div>
                )}

                {/* Title */}
                <span className="flex-1 text-2xl md:text-3xl font-bold tracking-wide text-gray-900">
                    {title}
                </span>

                {/* Chevron */}
                <span
                    className={`ml-auto text-gray-700 transition-transform duration-500 ${isOpen ? "rotate-180" : "rotate-0"
                        }`}
                    aria-hidden="true"
                >
                    ▼
                </span>
            </button>

            {/* Body: smoother fade + expand */}
            <div
                data-open={isOpen}
                className={`
          overflow-hidden border-t border-gray-200 bg-white
          transition-[max-height,opacity] duration-600 ease-in-out
          ${isOpen ? "max-h-[1200px] opacity-100" : "max-h-0 opacity-0"}
        `}
            >
                <div className="px-6 py-6">
                    <div className="space-y-3 text-lg md:text-xl leading-relaxed text-gray-700">
                        {children}
                    </div>
                </div>
            </div>
        </section>
    );
}