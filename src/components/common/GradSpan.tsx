/** @format */

export default function GradSpan({ children }: { children: React.ReactNode }) {
    return (
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-800">
            {children}
        </span>
    );
}
