import React from "react";
import { useNavigate } from "react-router-dom";

import SlDivider from "@shoelace-style/shoelace/dist/react/divider";

import ProductGrid from "../components/ProducsGrid";

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

const Catalog: React.FC<Props> = ({ products }) => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-full">
      <div className="flex flex-row items-end mb-6">
        <h1 className="text-3xl font-bold ">Product Catalog 📖📚</h1>
        <p
          className="underline text-gray-400 text-md cursor-pointer ml-3 select-none"
          onClick={() => {
            navigate("/admin");
          }}
        >
          Go to admin panel →
        </p>
      </div>

      <div
        className="bg-white rounded-2xl w-full p-6 border overflow-y-auto hide-scrollbar"
        style={{ height: "92%" }}
      >
        <div className="flex flex-row  mt-4 items-end">
          <p className="text-gray-400 text-lg ml-2">
            Total of {products.length} items
          </p>
        </div>
        <SlDivider
          className="mt-4 mb-8 bg-gray-200"
          style={{ height: "1px" }}
        />
        <ProductGrid products={products} />
      </div>
    </div>
  );
};

export default Catalog;
