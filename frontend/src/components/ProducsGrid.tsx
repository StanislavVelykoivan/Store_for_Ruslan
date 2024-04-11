import React from "react";

interface Product {
  _id: string;
  image: string;
  name: string;
  price: number;
  description: string;
}

interface Props {
  products: Product[];
}

const ProductGrid: React.FC<Props> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {products.map((product, index) => (
        <div
          key={index}
          className="border p-4 rounded-lg flex flex-col justify-between hover:bg-gray-100"
        >
          <div className="flex jusitfy-center items-center h-full">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto mb-2 rounded-md"
              style={{ width: "100%", maxHeight: "300px", objectFit: "cover" }}
            />
          </div>
          <div className="">
            <div className="text-2xl">{product.name}</div>
            <div className="text-sm mb-4 text-gray-500">
              {product.description}
            </div>
            <div className="flex flex-row items-center justify-between">
              <strong>${product.price}</strong>
              <div className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-300 hover:text-black cursor-pointer select-none">
                Add to cart 🛒
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
