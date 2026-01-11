import { useState } from "react";
import Toast from "./Toast";

const products = [
  {
    id: 1,
    name: "Wireless Headphone",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  },
  {
    id: 3,
    name: "Running Shoes",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
  },
  {
    id: 4,
    name: "Backpack",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
  },
];

const FeaturedProducts = () => {
  const isLoggedIn = false;
  const [ToastMeaasge, SetToastMessage] = useState("");

  const handleAddToCart = () => {
    if (!isLoggedIn) {
      SetToastMessage("Please Login first!");
      return;
    }
    SetToastMessage("Added to cart");
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-slate-900">Featured Products</h2>

        <button className="text-sky-500 hover:underline">View All</button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="
              border 
              rounded-lg 
              overflow-hidden 
              shadow 
              hover:shadow-lg 
              transition
            "
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-48 w-full object-cover"
            />

            <div className="p-4">
              <h3 className="font-semibold text-lg mb-1">{product.name}</h3>

              <p className="text-gray-600 mb-3">${product.price}</p>

              <button
                onClick={handleAddToCart}
                className="
                  w-full 
                  bg-orange-400 
                  py-2 
                  rounded-md 
                  shadow-md 
                  hover:bg-orange-500 
                  active:translate-y-1px
                  transition
                "
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      {ToastMeaasge && (
        <Toast message={ToastMeaasge} onClose={() => SetToastMessage("")} />
      )}
    </section>
  );
};

export default FeaturedProducts;
