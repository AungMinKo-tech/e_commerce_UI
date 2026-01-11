import React from "react";

const Banner = () => {
  return (
    <section className="bg-slate-100">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Upgrade Your <span className="text-sky-500">Style</span>
          </h1>

          <p className="text-gray-600 mb-6">
            Discover the latest products with the best quality and price.
          </p>

          <div className="flex gap-4">
            <button className="bg-sky-500 text-white px-6 py-3 rounded-md shadow-md hover:bg-sky-600 active:translate-y-1px transition">
              Shop Now
            </button>

            <button className="border border-slate-900 px-6 py-3 rounded-md hover:bg-slate-900 hover:text-white transition">
              Explore
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
            alt="banner"
            className="rounded-lg shadow-lg max-h-100 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
