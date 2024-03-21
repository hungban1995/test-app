"use client";

import React, { useState } from "react";

function Navbar() {
  const [tab, setTab] = useState(1);
  const navItem = [
    { id: 1, title: "All" },
    { id: 2, title: "Manpower Supply" },
    { id: 3, title: "Mobile App/ Website" },
    { id: 4, title: "UX/UI Design" },
  ];
  return (
    <div className="flex flex-row items-center justify-center gap-4 font-bold">
      {navItem.map((item) => (
        <div
          onClick={() => setTab(item.id)}
          key={item.id}
          className={` ${
            tab === item.id ? " bg-yellow-300" : ""
          }  item-container p-3  rounded cursor-pointer`}
        >
          {item.title}
        </div>
      ))}
    </div>
  );
}

export default Navbar;
