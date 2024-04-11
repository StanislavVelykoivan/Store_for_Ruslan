import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import SlDetails from "@shoelace-style/shoelace/dist/react/details";

import ProductTable from "../components/ProducsTable";
import ProductForm from "../components/ProductCreateForm";

interface Product {
  _id: string;
  image: string;
  name: string;
  price: number;
  description: string;
}

interface NewProduct {
  image: string;
  name: string;
  price: number;
  description: string;
}

type SetStateFunction<T> = React.Dispatch<React.SetStateAction<T>>;

interface Props {
  products: Product[];
  apiURL: string;
  fetchProducts: () => void;
  setProducts: SetStateFunction<Product[]>;
}

const AdminPanel: React.FC<Props> = ({
  products,
  setProducts,
  apiURL,
  fetchProducts,
}) => {
  const navigate = useNavigate();

  const deleteProduct = async (_id: string) => {
    try {
      const response = await axios.delete(`${apiURL}/Mouse/${_id}`);
      if (response.status === 200) {
        setProducts(products.filter((product) => product._id !== _id));
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const createProduct = async (product: NewProduct) => {
    try {
      const response = await axios.post<Product>(`${apiURL}/Mouse`, product);
      if (response.status === 200) {
        fetchProducts();
      }
      // Insert product on frontend exclusively for testing
      // const insertProduct: any = product;
      // insertProduct._id = "12323";
      // setProducts((prevProducts) => [...prevProducts, insertProduct]);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div className="w-full h-full">
      <div className="flex flex-row items-end mb-6">
        <h1 className="text-3xl font-bold ">Admin Panel 💀⚰️</h1>
        <p
          className="underline text-gray-400 text-md cursor-pointer ml-3 select-none"
          onClick={() => {
            navigate("/catalog");
          }}
        >
          Go to product catalog →
        </p>
      </div>
      <div
        className="bg-white rounded-2xl w-full p-6 border overflow-y-auto hide-scrollbar"
        style={{ height: "92%" }}
      >
        <SlDetails summary="Product Table" className="border p-6 rounded-lg">
          <ProductTable products={products} onDelete={deleteProduct} />
        </SlDetails>
        <SlDetails summary="Create Form" className="border p-6 rounded-lg mt-2">
          <ProductForm onSubmit={createProduct} />
        </SlDetails>
      </div>
    </div>
  );
};

export default AdminPanel;
