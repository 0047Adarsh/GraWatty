export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Text */}
        <div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900">
            Clean Energy, <br /> Powered by Gravity
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-lg">
            Grawatty harnesses gravity and buoyancy to generate sustainable,
            off-grid electricity for the future.
          </p>

          <div className="mt-8 flex space-x-4">
            <a
              href="#contact"
              className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
            >
              Get Started
            </a>
            <a
              href="#features"
              className="px-6 py-3 rounded-full border border-gray-300 hover:border-black transition"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Visual */}
        <div className="flex justify-center">
          <div className="w-80 h-80 rounded-full bg-gray-200 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
