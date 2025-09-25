import { useEffect, useState } from "react";

export default function ResumeUpdateNote() {
    const [lastUpdated, setLastUpdated] = useState(null);

    useEffect(() => {
        // Ask the server for just the headers of /resume.pdf
        fetch("/rameshnelikil.pdf", { method: "HEAD" })
            .then((res) => {
                const lm = res.headers.get("last-modified");
                if (lm) {
                    const d = new Date(lm);
                    // e.g., "Sep 2025" (or change options if you want the day too)
                    const formatted = d.toLocaleDateString("en-US", {
                        month: "short",
                        year: "numeric",
                    });
                    setLastUpdated(formatted);
                }
            })
            .catch(() => {
                // Silent fail — if header isn't available in some hosting envs
                setLastUpdated(null);
            });
    }, []);

    if (!lastUpdated) return null;

    return (
        <p className="mt-1 text-xs text-gray-500 italic">
            Updated: {lastUpdated}
        </p>
    );
}