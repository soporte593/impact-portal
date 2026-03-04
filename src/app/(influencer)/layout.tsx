
export default function InfluencerLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="theme-mixtape min-h-screen text-white selection:bg-pink-500 selection:text-white">
            {children}
        </div>
    );
}
