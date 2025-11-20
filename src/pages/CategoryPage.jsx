import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ProductGrid from '../components/ProductGrid';
import Footer from '../components/Footer';
import { products } from '../data/products';
import { categories } from '../data/categories';

const CategoryPage = () => {
  const { categoryId, subcategoryId } = useParams();
  
  // Find category info
  const category = categories.find(c => c.id === categoryId);
  const subcategory = category?.subcategories.find(s => s.id === subcategoryId);
  
  // Filter products
  const filteredProducts = products.filter(p => {
    if (subcategoryId) {
      return p.category === categoryId && p.subcategory === subcategoryId;
    }
    return p.category === categoryId;
  });

  const title = subcategory ? subcategory.name : category?.name || 'Products';

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Category header */}
      <div className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{title}</h1>
          <p className="text-muted-foreground">
            {filteredProducts.length} products available
          </p>
        </div>
      </div>

      {/* Products */}
      <div className="py-8">
        {filteredProducts.length > 0 ? (
          <ProductGrid products={filteredProducts} />
        ) : (
          <div className="container mx-auto px-4 text-center py-16">
            <p className="text-muted-foreground text-lg">
              No products found in this category yet. Check back soon!
            </p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default CategoryPage;
