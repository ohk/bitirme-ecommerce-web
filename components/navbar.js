import Link from "next/link";
import React from "react";
const Navbar = ({ itemCount }) => {
  return (
    <div className="relative flex items-center justify-between">
      <div className="text-gray-900 font-bold text-xl">
        YTU ECOMMERCE PROJECT TEMPLATE
      </div>
      <Link href={"/basket"}>
        <div className="cart-icon">
          <img
            src="https://raw.githubusercontent.com/ZhangMYihua/crwn-clothing/master/client/src/assets/shopping-bag.svg"
            className="shopping-icon"
          />
          <span className="item-count">{itemCount}</span>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
