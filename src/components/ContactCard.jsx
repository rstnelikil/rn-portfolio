import ResumeUpdateNote from "./ResumeUpdateNote"; // path is from components/

export default function ContactCard() {
    return (
        <section className="max-w-5xl mx-auto mt-12 px-6 py-8 bg-indigo-50 rounded-xl shadow-inner">
            <h2 className="text-xl font-semibold text-center text-indigo-800">Contact</h2>
            <ul className="mt-4 space-y-2 text-center text-gray-700">
                <li>
                    <a href="mailto:ramesh@example.com" className="hover:underline">
                        📧 ramesh@example.com
                    </a>
                </li>
                <li>
                    <a href="tel:+1-555-555-5555" className="hover:underline">
                        ✆ +1 (555) 555-5555
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.linkedin.com/in/ramesh-nelikil/"
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-primary"
                    >
                        LinkedIn
                    </a>
                </li>
                <li>
                    <a
                        href="/rameshnelikil.pdf"
                        download
                        className="btn btn-primary"
                    >
                        📄 Download Resume
                    </a>
                    <ResumeUpdateNote />
                </li>
            </ul>
        </section>
    );
}