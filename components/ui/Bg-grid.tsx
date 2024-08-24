import FlickeringGrid from "@/components/magicui/flickering-grid";

export function FlickeringGridDemo() {
    return (
        <div className="absolute h-[100vh] left-0 top-0 z-10 w-full bg-background overflow-hidden border">
            <FlickeringGrid
                className="z-0 absolute inset-0 size-full"
                squareSize={12}
                gridGap={6}
                color="#6B7280"
                maxOpacity={0.15}
                flickerChance={0.1}
                height={1200}
                width={1200}
            />
        </div>
    );
}
