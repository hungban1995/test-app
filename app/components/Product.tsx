import Image from "next/image";
import Link from "next/link";
import React from "react";

function Product() {
  const listContent = [
    {
      id: 1,
      title: "Manpower Supply",
      image: "/images/image-1.png",
      url: "#",
    },
    {
      id: 2,
      title: "E-learning – Internal training platform",
      image: "/images/image-2.png",
      url: "#",
    },
    {
      id: 3,
      title: "Summer 21 Cosmetic E-commerce Platform",
      image: "/images/image-3.png",
      url: "#",
    },
    {
      id: 4,
      title:
        "Kiva – Ambition to digital transformation in the brokerage assiduity",
      image: "/images/image-4.png",
      url: "#",
    },
    {
      id: 5,
      title: "Boxgo – Professional Warehouse Management",
      image: "/images/image-5.png",
      url: "#",
    },
  ];
  return (
    <div className="grid grid-cols-3 max-xl:grid-cols-1 w-8/12 mx-auto gap-4 mt-5">
      {listContent.map((item) => (
        <Link
          href={item.url}
          key={item.id}
          className="mt-5 relative cursor-pointer transform transition-transform duration-300 ease-in-out hover:-translate-y-2  rounded-md  border-spacing-1 shadow-lg hover:shadow-xl"
        >
          <Image
            width={400}
            height={400}
            src={item.image}
            alt="img"
            className="w-full object-cover"
          />
          <div className="absolute bottom-5 inset-x-0 justify-between flex bg-white p-3 shadow-xl mx-10 rounded-md">
            <span> {item.title} </span>
            <span>{">"}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Product;
