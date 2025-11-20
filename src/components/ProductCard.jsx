import { Link } from 'react-router-dom';
import { Heart, ShoppingBag } from 'lucide-react';
import { useState } from 'react';

const ProductCard = ({ product }) => {
  const [isLiked, setIsLiked] = useState(false);
  const discount = Math.round(((product.mrp - product.price) / product.mrp) * 100);

  return (
    <div className="group relative bg-card rounded-xl overflow-hidden shadow-card hover:shadow-elegant transition-all duration-300">
      {/* Image container */}
      <Link to={`/product/${product.id}`} className="block relative aspect-square overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Discount badge */}
        {discount > 0 && (
          <div className="absolute top-3 left-3 bg-destructive text-destructive-foreground px-2 py-1 rounded-md text-xs font-semibold">
            {discount}% OFF
          </div>
        )}

        {/* Wishlist button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            setIsLiked(!isLiked);
          }}
          className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
        >
          <Heart
            className={`w-4 h-4 ${isLiked ? 'fill-destructive text-destructive' : 'text-foreground'}`}
          />
        </button>
      </Link>

      {/* Product info */}
      <div className="p-3 md:p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-semibold text-sm md:text-base mb-1 line-clamp-2 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
        </Link>

        <div className="flex items-baseline gap-2 mb-3">
          <span className="text-lg md:text-xl font-bold text-primary">
            ₹{product.price}
          </span>
          <span className="text-sm text-muted-foreground line-through">
            ₹{product.mrp}
          </span>
        </div>

        {/* Add to cart button */}
        <button className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-2 md:py-2.5 rounded-lg font-medium hover:bg-primary/90 transition-colors text-sm">
          <ShoppingBag className="w-4 h-4" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
