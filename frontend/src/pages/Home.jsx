import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import CategoryGrid from '../components/CategoryGrid';
import ProductGrid from '../components/ProductGrid';
import Footer from '../components/Footer';
import { products } from '../data/products';

const Home = () => {
  const newArrivals = products.filter(p => p.category === 'new-arrivals' || p.id <= 6);
  const featuredProducts = products.slice(0, 8);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <CategoryGrid />
      <ProductGrid
        products={newArrivals}
        title="New Arrivals"
        subtitle="Discover our latest collection of stunning jewelry"
      />
      <div className="bg-muted py-16">
        <ProductGrid
          products={featuredProducts}
          title="Featured Collection"
          subtitle="Handpicked pieces you'll love"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
