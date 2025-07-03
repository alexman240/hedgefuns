import React from "react";

function Card({ children, className }: any) {
  return <div className={`rounded-lg shadow-md ${className}`}>{children}</div>;
}

function CardContent({ children, className }: any) {
  return <div className={className}>{children}</div>;
}

function Button({ children, className, ...props }: any) {
  return (
    <button
      className={`px-4 py-2 rounded font-semibold transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-green-50 to-gray-100 p-6 flex flex-col items-center justify-center text-center font-serif">
      <div className="max-w-3xl w-full space-y-8">
        <img
          src="/hedgefuns-logo.png"
          alt="HedgeFuns Logo"
          className="w-40 mx-auto rounded-full border-4 border-green-500 shadow-xl"
        />

        <h1 className="text-5xl font-extrabold text-green-800 tracking-tight uppercase">
          HEDGEFUNS CAPITAL
        </h1>

        <p className="text-lg text-gray-700 italic">
          "Maximizing volatility for fun and no profit since 2024."
        </p>

        <Card className="bg-white/90 border border-green-200 shadow-2xl">
          <CardContent className="p-8 space-y-6">
            <h2 className="text-2xl font-semibold text-green-700 underline">
              Our Strategy
            </h2>
            <ul className="list-disc list-inside text-left text-gray-800 space-y-2">
              <li>High-frequency meme arbitrage.</li>
              <li>Leveraged hedgehog-based derivatives.</li>
              <li>Shorting logic. Longing chaos.</li>
            </ul>
            <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
              Apply for a Memevestment
            </Button>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
          <Card className="bg-white/80 p-4 border shadow-md">
            <h3 className="text-lg font-bold text-green-800">
              Assets Under Confusion
            </h3>
            <p className="text-gray-700 text-sm mt-2">
              $420,690,000 (imaginary)
            </p>
          </Card>

          <Card className="bg-white/80 p-4 border shadow-md">
            <h3 className="text-lg font-bold text-green-800">Memeformance</h3>
            <p className="text-gray-700 text-sm mt-2">
              -32% YOY, but morale is up
            </p>
          </Card>

          <Card className="bg-white/80 p-4 border shadow-md">
            <h3 className="text-lg font-bold text-green-800">Our Hedgehogs</h3>
            <p className="text-gray-700 text-sm mt-2">
              Trained in chaos theory and Photoshop
            </p>
          </Card>
        </div>

        <div className="flex justify-center gap-4 pt-6">
          <a
            href="https://twitter.com/hedge_funs"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-400 text-gray-800 flex items-center gap-2 px-4 py-2 rounded font-semibold transition"
          >
            <span>🚀</span> Twitter
          </a>
        </div>

        <footer className="text-sm text-gray-600 pt-8 border-t border-gray-300 mt-8">
          © 2025 HedgeFuns Capital. Not licensed, not responsible, not serious.
        </footer>
      </div>
    </div>
  );
}
