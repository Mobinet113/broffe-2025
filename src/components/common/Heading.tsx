/** @format */

interface HeadingProps {
    type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    children: React.ReactNode;
}
export default function Heading({ type = "h1", children }: HeadingProps) {
    switch (type) {
        case "h1":
            return <h1 className="text-6xl font-semibold">{children}</h1>;
        case "h2":
            return <h2 className="text-4xl font-semibold mb-5">{children}</h2>;
        case "h3":
            return <h3 className="text-2xl font-semibold mb-2">{children}</h3>;
        case "h4":
            return <h4>{children}</h4>;
        case "h5":
            return <h5>{children}</h5>;
        case "h6":
            return <h6>{children}</h6>;
        default:
    }
}
