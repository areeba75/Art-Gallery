import React from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div className="text-center py-[72px]">
      <h2 className="font-extrabold tracking-wide">Your cart</h2>
      <p className="mb-[22px] text-[rgb(246,201,52)]">
        Your cart is currently empty.
      </p>
      <Link to="/abstract">
        <button className="min-w-[13rem] h-[3.2rem] inline-flex justify-center items-center border-0 px-[0.3rem] cursor-pointer font-inherit text-[1.3rem] font-semibold uppercase tracking-wider text-black bg-[#F6C934] transition-all ease-in-out relative overflow-hidden">
          <a className="text-black font-medium text-[13px]">
            CONTINUE SHOPPING
          </a>
        </button>
      </Link>
    </div>
  );
};

export default Cart;
