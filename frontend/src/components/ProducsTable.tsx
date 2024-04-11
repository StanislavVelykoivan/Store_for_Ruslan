import React, { useState } from "react";

interface Product {
  _id: string;
  image: string;
  name: string;
  price: number;
  description: string;
}

interface Props {
  products: Product[];
  onDelete: (_id: string) => void;
}

const ProductTable: React.FC<Props> = ({ products, onDelete }) => {
  const handleDelete = (_id: string) => {
    onDelete(_id);
  };

  const openUrlInNewTab = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <table className="table-auto w-full">
      <thead>
        <tr>
          <th className="px-4 py-2">Image URL</th>
          <th className="px-4 py-2">Name</th>
          <th className="px-4 py-2">Description</th>
          <th className="px-4 py-2">Price</th>
          <th className="px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product._id} className="hover:bg-gray-100">
            <td className="border px-4 py-2" style={{ width: "350px" }}>
              {product.image.length > 20
                ? `${product.image.substring(0, 20)}...`
                : product.image}
              <button
                className="ml-2 bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded"
                onClick={() => openUrlInNewTab(product.image)}
              >
                Open
              </button>
            </td>
            <td className="border px-4 py-2">{product.name}</td>
            <td className="border px-4 py-2 text-sm text-gray-500">
              {product.description}
            </td>
            <td className="border px-4 py-2 font-bold text-center">
              ${product.price}
            </td>
            <td className="border px-4 py-2" style={{ width: "40px" }}>
              <button
                className="bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded"
                onClick={() => handleDelete(product._id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
