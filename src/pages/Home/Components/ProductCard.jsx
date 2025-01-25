import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {

  return (
 
    <Link key={product.id} to={`/product/${product.id}`} className="no-underline p-4 bg-[#ffebcd] rounded-lg flex flex-col justify-between hover:shadow-lg sm:p-6 md:p-8 lg:p-10">
      <div className="mb-4">
        <div className="flex justify-center p-3 sm:p-4 md:p-5 h-[144px] w-full bg-white rounded-md">
          <img src={product.image_url ? product.image_url : 'https://via.placeholder.com/150'}
            alt={product.product_name || "Product Image"} className="object-contain w-full h-full" />
        </div>
        <h2 className="my-2 text-sm leading-5 font-medium text-black">{product.product_name}</h2>
        <p className="m-0 text-sm leading-5 text-[#444444] inline"><b className="text-black font-medium">Category:</b> <br /> {product.categories?.replaceAll(",", ", ").slice(0, 80)}
        </p>
      </div>
      <div className="bg-[#28a745] text-white px-4 py-1.5 rounded font-semibold text-sm">
        Nutrition Grade: {product.nutrition_grades.toUpperCase()}
      </div>
    </Link>

  );

};

export default ProductCard;
