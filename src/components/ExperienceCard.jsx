import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function ExperienceCard({ id, company, role, image, imageAlt, highlights = [] }) {
    const previewHighlights = highlights.slice(0, 3);

    return (
        <div className="h-full bg-gradient-to-br from-white via-indigo-50/40 to-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col gap-2.5">
            {/* Top thumbnail image */}
            {image && (
                <img
                    src={image}
                    alt={imageAlt}
                    className="w-full h-40 object-cover rounded-xl mb-4"
                    onError={(e) => (e.currentTarget.style.display = "none")}
                />
            )}

            {/* Left-aligned content */}
            <div>
                <h2 className="text-xl md:text-[1.35rem] font-semibold leading-snug">{role}</h2>
                <h3 className="text-sm md:text-[0.95rem] font-medium text-gray-600 mt-0.5">{company}</h3>
                <ul className="list-disc pl-5 text-gray-700 leading-relaxed space-y-1.5 mt-3">
                    {previewHighlights.map((point, idx) => (<li key={idx}>{point}</li>))}
                    {highlights.length > 3 && (<li className="italic text-gray-500">…more</li>)}
                </ul>
            </div>
            {/* Divider + Button block, anchored at bottom */}
            <div className="mt-auto">
                <div className="border-t border-gray-100 pt-4">
                    <div className="flex justify-center">
                        <Link
                            to={`/experience/${id}`}
                            className="btn btn-primary"
                        >
                            View Details →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}