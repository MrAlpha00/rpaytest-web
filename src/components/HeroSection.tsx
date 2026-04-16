export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Unlock Your Potential with Premium eBooks
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Discover expert-written technical books on cybersecurity, networking, Linux, 
              and more. Start your learning journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#ebooks"
                className="inline-block bg-white text-primary-700 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors text-center"
              >
                Browse Collection
              </a>
              <a
                href="/about"
                className="inline-block border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white/10 transition-colors text-center"
              >
                Learn More
              </a>
            </div>

            <div className="mt-12 flex items-center gap-8">
              <div>
                <div className="text-3xl font-bold">10+</div>
                <div className="text-sm opacity-80">Premium Books</div>
              </div>
              <div>
                <div className="text-3xl font-bold">500+</div>
                <div className="text-sm opacity-80">Happy Readers</div>
              </div>
              <div>
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-sm opacity-80">Access</div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block relative">
            <div className="absolute -top-10 -right-10 w-72 h-96 bg-white/10 rounded-2xl transform rotate-6" />
            <div className="absolute -top-6 -right-6 w-72 h-96 bg-white/20 rounded-2xl transform rotate-3" />
            <div className="relative w-72 h-96 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl shadow-2xl flex items-center justify-center">
              <svg className="w-32 h-32 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
