import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="h-screen w-full flex flex-col items-center justify-center bg-fintech-900 text-white font-mono">
            <h2 className="text-4xl font-bold text-fintech-500 mb-4">404 | Resource Missing</h2>
            <p className="text-slate-400 mb-8">The requested endpoint could not be found.</p>
            <Link
                href="/"
                className="px-6 py-2 border border-fintech-500 text-fintech-400 hover:bg-fintech-500/10 transition-colors"
            >
                Return to System Root
            </Link>
        </div>
    )
}