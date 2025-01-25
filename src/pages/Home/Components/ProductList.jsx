import React, { useState } from "react";
import ProductCard from "./ProductCard";
import "./HomeStyle.css";

const ProductList = ({ products, isLoading, setPage, hasMore }) => {
  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <div className="flex flex-col">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5">
          {products.map((product) => (
            <ProductCard
              key={product.id || product.barcode}
              product={product}
            />
          ))}
        </div>
        {hasMore && (
          <div className="flex justify-center">
            {!isLoading ? (
              <button
                onClick={handleLoadMore}
                className="bg-[#007bff] text-white px-5 py-3 border-none rounded cursor-pointer text-base transition duration-300 ease-in-out hover:bg-[#0056b3] mx-auto mt-5"
              >
                Load More
              </button>
            ) : (
              <div style={{ height: 82.667 }}></div>
            )}
          </div>
        )}
      </div>

      {isLoading && (
        <div className="fixed inset-0 flex justify-center items-center">
          <div className="loader"></div>
        </div>
      )}
    </>
  );
};

export default ProductList;
