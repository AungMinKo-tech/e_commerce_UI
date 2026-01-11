const categories = [
  {
    title: "Electronics",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
  },
  {
    title: "Fashion",
    image: "https://images.unsplash.com/photo-1521334884684-d80222895322",
  },
  {
    title: "Home & Living",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
  },
  {
    title: "Accessories",
    image: "https://images.unsplash.com/photo-1519744792095-2f2205e87b6f",
  },
];

const Categories = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-14">
      <h2 className="text-2xl font-bold mb-8 text-slate-900">
        Shop by Category
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="
              relative 
              group 
              rounded-lg 
              overflow-hidden 
              cursor-pointer
              shadow
            "
          >
            <img
              src={cat.image}
              alt={cat.title}
              className="
                h-40 w-full object-cover 
                group-hover:scale-110 
                transition
              "
            />

            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h3 className="text-white text-lg font-semibold">{cat.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
