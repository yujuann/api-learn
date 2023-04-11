import React from "react";
import Products from "./Products";

export default function Home() {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img
          className="card-img"
          src="https://static.dailytrend.co.kr/wp-content/uploads/2020/05/04073729/a5558674-513a-4564-9cbd-d935e924cb84.png"
          //   src="/assets/chanel.jpeg"
          alt="background"
          height="550px"
          width="800px"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title display-3 mb-0">
              New Season 겨울 신상품
            </h5>
            <p className="card-text lead fs-2">Check Out All The Trends</p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
}
