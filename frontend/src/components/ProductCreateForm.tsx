import React, { useState } from "react";

interface ProductFormProps {
  onSubmit: (product: Product) => void;
}

interface Product {
  image: string;
  name: string;
  price: number;
  description: string;
}

const ProductForm: React.FC<ProductFormProps> = ({ onSubmit }) => {
  const [product, setProduct] = useState<Product>({
    image: "",
    name: "",
    price: 0,
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(product);
    setProduct({
      image: "",
      name: "",
      price: 0,
      description: "",
    });
  };

  return (
    <div className="flex flex-col items-center w-full">
      <form onSubmit={handleSubmit} className="w-full lg:w-1/2">
        <div className="w-full flex flex-row border p-2 rounded-lg items-center mt-8 mb-2 justify-between">
          <label className="w-1/6">Image URL:</label>
          <input
            type="text"
            className="rounded-md ml-2 bg-gray-100 px-2 py-1 focus:outline-none focus:bg-gray-200 w-5/6"
            name="image"
            value={product.image}
            onChange={handleChange}
          />
        </div>
        <div className="w-full flex flex-row border p-2 rounded-lg items-center mb-2 justify-between">
          <label className="w-1/6">Name:</label>
          <input
            className="rounded-md ml-2 bg-gray-100 px-2 py-1 focus:outline-none focus:bg-gray-200 w-5/6"
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
          />
        </div>
        <div className="w-full flex flex-row border p-2 rounded-lg items-center mb-2 justify-between">
          <label className="w-1/6">Price:</label>
          <input
            className="rounded-md ml-2 bg-gray-100 px-2 py-1 focus:outline-none focus:bg-gray-200 w-5/6"
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
          />
        </div>
        <div className="w-full flex flex-row border p-2 rounded-lg items-start mb-2 justify-between">
          <label className="w-1/6">Description:</label>
          <textarea
            className="rounded-md ml-2 bg-gray-100 px-2 py-1 focus:outline-none focus:bg-gray-200 w-5/6"
            name="description"
            style={{ height: "200px" }}
            value={product.description}
            onChange={handleChange}
          />
        </div>
        <div className="w-full flex flex-row justify-between mt-4">
          <div />
          <button
            type="submit"
            className="ml-2 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
