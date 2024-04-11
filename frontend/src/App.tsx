import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

import logo from "./logo.svg";
import "./App.css";

import Catalog from "./pages/Catalog";
import AdminPanel from "./pages/AdminPanel";

const apiURL = "http://localhost:4000";

interface Product {
  _id: string;
  image: string;
  name: string;
  price: number;
  description: string;
}

function App() {
  const [products, setProducts] = useState<Product[]>([
    {
      _id: "123123",
      image:
        "https://media.discordapp.net/attachments/486088134782877698/1223912895193288784/IMG_20240331_113227_451.jpg?ex=6624cf35&is=66125a35&hm=31dce66e1cb2c2ba5c2bcf4c54fcb270a823b1baf6598ba7569dec1cd59407c0&=&format=webp&width=464&height=619",
      name: "Logitech G Pro Wireless",
      price: 100,
      description:
        "Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
    },
    {
      _id: "1231231",
      image:
        "https://media.discordapp.net/attachments/486088134782877698/1223912895193288784/IMG_20240331_113227_451.jpg?ex=6624cf35&is=66125a35&hm=31dce66e1cb2c2ba5c2bcf4c54fcb270a823b1baf6598ba7569dec1cd59407c0&=&format=webp&width=464&height=619",
      name: "Logitech G Pro Wireless",
      price: 100,
      description:
        "Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
    },
    {
      _id: "1123",
      image:
        "https://media.discordapp.net/attachments/486088134782877698/1223912895193288784/IMG_20240331_113227_451.jpg?ex=6624cf35&is=66125a35&hm=31dce66e1cb2c2ba5c2bcf4c54fcb270a823b1baf6598ba7569dec1cd59407c0&=&format=webp&width=464&height=619",
      name: "Logitech G Pro Wireless",
      price: 100,
      description:
        "Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
    },
    {
      _id: "1423",
      image:
        "https://media.discordapp.net/attachments/486088134782877698/1223912895193288784/IMG_20240331_113227_451.jpg?ex=6624cf35&is=66125a35&hm=31dce66e1cb2c2ba5c2bcf4c54fcb270a823b1baf6598ba7569dec1cd59407c0&=&format=webp&width=464&height=619",
      name: "Logitech G Pro Wireless",
      price: 100,
      description:
        "Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
    },
    {
      _id: "1111",
      image:
        "https://media.discordapp.net/attachments/486088134782877698/1223912895193288784/IMG_20240331_113227_451.jpg?ex=6624cf35&is=66125a35&hm=31dce66e1cb2c2ba5c2bcf4c54fcb270a823b1baf6598ba7569dec1cd59407c0&=&format=webp&width=464&height=619",
      name: "Logitech G Pro Wireless",
      price: 100,
      description:
        "Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
    },
  ]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${apiURL}/Mouse`);
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div
      className="w-screen h-screen bg-slate-100  "
      style={{ padding: "40px 10% 10px 10%" }}
    >
      <Routes>
        <Route path="/catalog" element={<Catalog products={products} />} />
        <Route
          path="/admin"
          element={
            <AdminPanel
              products={products}
              apiURL={apiURL}
              setProducts={setProducts}
              fetchProducts={fetchProducts}
            />
          }
        />
        <Route path="*" element={<p>404 not found</p>} />
      </Routes>
    </div>
  );
}

export default App;
