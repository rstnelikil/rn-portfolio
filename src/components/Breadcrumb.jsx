import { Link } from "react-router-dom";

/**
 * Breadcrumb
 * Pass items like:
 *   [{ to: "/", label: "Home" }, { to: "/experience", label: "Experience" }, { label: "Current Page" }]
 * Last item (no `to`) is rendered as the current page.
 */
export default function Breadcrumb({ items = [] }) {
    return (
        <nav className="bg-white border-b border-gray-200 border-t-4 border-brand-dark px-4 py-2 rounded-t-md">
            <ol className="flex items-center text-sm">
                {items.map((item, idx) => {
                    const isLast = idx === items.length - 1;
                    return (
                        <li key={idx} className="flex items-center">
                            {item.to && !isLast ? (
                                <Link
                                    to={item.to}
                                    className="text-indigo-600 hover:text-indigo-800"
                                >
                                    {item.label}
                                </Link>
                            ) : (
                                <span className="text-slate-800 font-medium">{item.label}</span>
                            )}
                            {!isLast && <span className="mx-2 text-slate-400">/</span>}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}