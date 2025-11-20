import { Link } from 'react-router-dom';
import { X, ChevronRight } from 'lucide-react';
import { categories } from '../data/categories';
import { useState } from 'react';

const MobileMenu = ({ isOpen, onClose }) => {
  const [expandedCategory, setExpandedCategory] = useState(null);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-50 lg:hidden"
        onClick={onClose}
      />

      {/* Sliding menu */}
      <div className="fixed top-0 left-0 bottom-0 w-80 bg-card z-50 lg:hidden overflow-y-auto shadow-elegant">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h2 className="text-xl font-bold gradient-primary bg-clip-text text-transparent">
            Jewelique
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-accent rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Menu items */}
        <div className="p-4 space-y-2">
          <Link
            to="/new-arrivals"
            onClick={onClose}
            className="block px-4 py-3 hover:bg-accent rounded-lg transition-colors font-medium"
          >
            ✨ New Arrivals
          </Link>

          {categories.map((category) => (
            <div key={category.id}>
              {category.subcategories.length === 0 ? (
                <Link
                  to={`/category/${category.id}`}
                  onClick={onClose}
                  className="block px-4 py-3 hover:bg-accent rounded-lg transition-colors"
                >
                  {category.name}
                </Link>
              ) : (
                <>
                  <button
                    onClick={() =>
                      setExpandedCategory(
                        expandedCategory === category.id ? null : category.id
                      )
                    }
                    className="w-full flex items-center justify-between px-4 py-3 hover:bg-accent rounded-lg transition-colors text-left"
                  >
                    <span>{category.name}</span>
                    <ChevronRight
                      className={`w-4 h-4 transition-transform ${
                        expandedCategory === category.id ? 'rotate-90' : ''
                      }`}
                    />
                  </button>

                  {expandedCategory === category.id && (
                    <div className="ml-4 space-y-1 mt-1">
                      {category.subcategories.map((sub) => (
                        <Link
                          key={sub.id}
                          to={`/category/${category.id}/${sub.id}`}
                          onClick={onClose}
                          className="block px-4 py-2 text-sm hover:bg-accent rounded-lg transition-colors"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          ))}

          <Link
            to="/sale"
            onClick={onClose}
            className="block px-4 py-3 hover:bg-accent rounded-lg transition-colors font-medium text-destructive"
          >
            🔥 Sale / Offers Zone
          </Link>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
