import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative gradient-hero text-white overflow-hidden">
      <div className="container mx-auto px-4 py-20 md:py-28">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Discover Your
            <br />
            Perfect Sparkle
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/90">
            Premium handcrafted jewelry for every occasion. From minimalist elegance to statement pieces.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/new-arrivals"
              className="px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-colors text-center shadow-elegant"
            >
              Shop New Arrivals
            </Link>
            <Link
              to="/sale"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-colors text-center border border-white/30"
            >
              Explore Sale
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-1/4 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
    </section>
  );
};

export default Hero;
