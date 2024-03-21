import Image from "next/image";
import Navbar from "./components/Navbar";
import Product from "./components/Product";

export default function Home() {
  return (
    <div className="m-5">
      <Navbar />
      <Product />
    </div>
  );
}
