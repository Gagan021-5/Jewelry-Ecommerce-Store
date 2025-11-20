import { Link } from 'react-router-dom';
import { categories } from '../data/categories';

const MegaMenu = () => {
  return (
    <div className="absolute left-0 right-0 top-full mt-1 bg-card shadow-elegant border border-border rounded-lg">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-4 gap-8">
          {categories.slice(1, 13).map((category) => (
            <div key={category.id} className="space-y-3">
              <Link
                to={`/category/${category.id}`}
                className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors block"
              >
                {category.name}
              </Link>
              {category.subcategories.length > 0 && (
                <ul className="space-y-2">
                  {category.subcategories.map((sub) => (
                    <li key={sub.id}>
                      <Link
                        to={`/category/${category.id}/${sub.id}`}
                        className="text-sm text-foreground hover:text-primary transition-colors block"
                      >
                        {sub.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Featured section at bottom */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="grid grid-cols-4 gap-4">
            <Link
              to="/category/by-style"
              className="p-4 bg-accent hover:bg-accent/80 rounded-lg transition-colors"
            >
              <div className="text-sm font-semibold mb-1">✨ Trending Styles</div>
              <div className="text-xs text-muted-foreground">Explore what's hot</div>
            </Link>
            <Link
              to="/category/sale"
              className="p-4 bg-destructive/10 hover:bg-destructive/20 rounded-lg transition-colors"
            >
              <div className="text-sm font-semibold mb-1 text-destructive">🔥 Sale Zone</div>
              <div className="text-xs text-muted-foreground">Up to 70% off</div>
            </Link>
            <Link
              to="/category/gifts"
              className="p-4 bg-secondary/20 hover:bg-secondary/30 rounded-lg transition-colors"
            >
              <div className="text-sm font-semibold mb-1">🎁 Perfect Gifts</div>
              <div className="text-xs text-muted-foreground">For every occasion</div>
            </Link>
            <Link
              to="/category/by-material"
              className="p-4 bg-accent hover:bg-accent/80 rounded-lg transition-colors"
            >
              <div className="text-sm font-semibold mb-1">💎 Premium Materials</div>
              <div className="text-xs text-muted-foreground">Silver, Gold & more</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
