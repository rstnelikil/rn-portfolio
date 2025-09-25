import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        // If the URL has a hash (#section), let the browser handle it (anchors)
        if (hash) return;

        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: prefersReducedMotion ? "auto" : "smooth",
        });
    }, [pathname, hash]);

    return null;
}