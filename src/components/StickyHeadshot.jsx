import headshot from "../assets/headshot.jpeg";

export default function StickyHeadshot() {
    return (
        <div
            aria-hidden="true"
            className="hidden md:block fixed top-24 right-5 z-40 pointer-events-none"
        >
            <div className="pointer-events-auto rounded-2xl shadow-lg border border-white/70 bg-white/70 backdrop-blur-sm p-1">
                <img
                    src={headshot}
                    alt=""
                    className="w-24 h-24 rounded-2xl object-cover"
                />
            </div>
        </div>
    );
}