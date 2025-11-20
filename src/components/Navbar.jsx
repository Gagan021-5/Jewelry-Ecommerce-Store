import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, Menu, User, Heart } from 'lucide-react';
import MegaMenu from './MegaMenu';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-card shadow-card">
        {/* Top bar */}
        <div className="border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-10 text-xs text-muted-foreground">
              <div className="hidden md:block">
                Free shipping on orders above ₹999
              </div>
              <div className="flex items-center gap-4">
                <Link to="/track-order" className="hover:text-foreground transition-colors">
                  Track Order
                </Link>
                <span>|</span>
                <Link to="/help" className="hover:text-foreground transition-colors">
                  Help
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Main navbar */}
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 hover:bg-accent rounded-lg transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>

            {/* Logo */}
            <Link to="/" className="flex items-center">
              <h1 className="text-2xl md:text-3xl font-bold gradient-primary bg-clip-text text-transparent">
                Jewelique
              </h1>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              <Link
                to="/new-arrivals"
                className="px-4 py-2 text-sm font-medium hover:bg-accent rounded-lg transition-colors"
              >
                New Arrivals
              </Link>
              
              {/* Categories with mega menu */}
              <div
                className="relative group"
                onMouseEnter={() => setActiveCategory('categories')}
                onMouseLeave={() => setActiveCategory(null)}
              >
                <button className="px-4 py-2 text-sm font-medium hover:bg-accent rounded-lg transition-colors">
                  Shop by Category
                </button>
                {activeCategory === 'categories' && <MegaMenu />}
              </div>

              <Link
                to="/sale"
                className="px-4 py-2 text-sm font-medium text-destructive hover:bg-accent rounded-lg transition-colors"
              >
                Sale
              </Link>
            </div>

            {/* Search bar */}
            <div className="hidden md:flex items-center flex-1 max-w-md mx-4">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search for jewelry..."
                  className="w-full pl-10 pr-4 py-2 bg-muted border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                />
              </div>
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-accent rounded-lg transition-colors">
                <Search className="w-5 h-5 md:hidden" />
              </button>
              <button className="p-2 hover:bg-accent rounded-lg transition-colors">
                <Heart className="w-5 h-5" />
              </button>
              <button className="p-2 hover:bg-accent rounded-lg transition-colors">
                <User className="w-5 h-5" />
              </button>
              <button className="p-2 hover:bg-accent rounded-lg transition-colors relative">
                <ShoppingBag className="w-5 h-5" />
                <span className="absolute top-0 right-0 w-4 h-4 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center">
                  0
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
};

export default Navbar;
