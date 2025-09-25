import { useEffect, useState } from "react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

export default function BackToTop() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setShow(window.scrollY > 320); // show after some scrolling
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const handleClick = () => {
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: prefersReducedMotion ? "auto" : "smooth",
        });
    };

    if (!show) return null;

    return (
        <button
            onClick={handleClick}
            aria-label="Back to top"
            className="fixed bottom-6 right-6 z-50 rounded-full border-2 border-indigo-600 text-indigo-600 bg-white/90 backdrop-blur-sm shadow-md p-3
               hover:bg-indigo-50 transition duration-300 ease-in-out
               opacity-0 translate-y-4 animate-fadeInUp"
        >
            <ChevronUpIcon className="h-6 w-6" />
        </button>
    );
}