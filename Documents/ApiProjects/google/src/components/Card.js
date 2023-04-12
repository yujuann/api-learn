import React, { useState } from "react";
import Modal from "./Modal";
function Card({ book }) {
  const [show, setShow] = useState(false);
  const [bookItem, setItem] = useState();
  console.log(book);
  return (
    <>
      {book.map((item) => {
        const thumbnail = item.volumeInfo.imageLinks?.smallThumbnail;
        const amount = item.saleInfo.listPrice?.amount;
        if (thumbnail && amount) {
          return (
            <>
              <div
                className="card"
                onClick={() => {
                  setShow(true);
                  setItem(item);
                }}
              >
                <img src={thumbnail} alt="" />
                <div className="bottom">
                  <h3 className="title">{item.volumeInfo.title}</h3>
                  <p className="amount">&#8377;{amount}</p>
                </div>
              </div>
              <Modal
                show={show}
                item={bookItem}
                onClose={() => setShow(false)}
              />
            </>
          );
        }
        return null; // 리턴 값이 없는 경우 undefined 대신 null을 리턴
      })}
    </>
  );
}

export default Card;
