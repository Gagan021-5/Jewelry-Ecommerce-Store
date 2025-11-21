import { Link } from 'react-router-dom';

const categoryHighlights = [
  {
    id: 'necklaces-pendants',
    name: 'Necklaces',
    emoji: '💎',
    color: 'from-purple-100 to-pink-100'
  },
  {
    id: 'earrings',
    name: 'Earrings',
    emoji: '✨',
    color: 'from-pink-100 to-rose-100'
  },
  {
    id: 'rings',
    name: 'Rings',
    emoji: '💍',
    color: 'from-rose-100 to-purple-100'
  },
  {
    id: 'bracelets-bangles',
    name: 'Bracelets',
    emoji: '⭐',
    color: 'from-purple-100 to-purple-50'
  },
  {
    id: 'sets-combos',
    name: 'Sets & Combos',
    emoji: '🎁',
    color: 'from-pink-100 to-pink-50'
  },
  {
    id: 'mens-collection',
    name: "Men's Collection",
    emoji: '👔',
    color: 'from-slate-100 to-slate-50'
  }
];

const CategoryGrid = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Shop by Category</h2>
          <p className="text-muted-foreground text-lg">Find the perfect piece for any occasion</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categoryHighlights.map((category) => (
            <Link
              key={category.id}
              to={`/category/${category.id}`}
              className="group"
            >
              <div className={`aspect-square bg-gradient-to-br ${category.color} rounded-2xl p-6 flex flex-col items-center justify-center transition-transform hover:scale-105 shadow-card hover:shadow-elegant`}>
                <div className="text-5xl md:text-6xl mb-3 group-hover:scale-110 transition-transform">
                  {category.emoji}
                </div>
                <h3 className="text-sm md:text-base font-semibold text-center text-foreground">
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
