import { useState } from "react";

function ShoppingCart() {
  const [cart, setCart] = useState([]);
  const product = [
    { id: 1, name: "노트북", price: 1500000 },
    { id: 2, name: "무선마우스", price: 50000 },
    { id: 3, name: "유선마우스", price: 29000 },
    { id: 4, name: "키보드", price: 40000 },
    { id: 5, name: "AA건전지", price: 3000 },
  ];

  const handleAdd = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const handleRemove = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        border: "3px solid black",
        width: "800px",
        backgroundColor: "rgba(59, 60, 83, 1)",
        color: "white",
      }}
    >
      <h1>Shopping Cart</h1>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          fontSize: "10px",
          border: "2px solid black",
          gap: "10px",
        }}
      >
        <h2
          style={{
            fontSize: "14px",
            padding: "0 30px",
          }}
        >
          상품 목록
        </h2>
        {product.map((p) => (
          <div key={p.id} style={{ marginBottom: 8 }}>
            <span>
              {p.name} - {p.price.toLocaleString()}원
            </span>
            <button
              onClick={() => handleAdd(p)}
              style={{
                border: "none",
                backgroundColor: "gray",
                color: "white",
                marginLeft: 10,
              }}
            >
              담기
            </button>
          </div>
        ))}
      </div>

      <div>
        <h2>장바구니 목록</h2>
        {cart.length === 0 ? (
          <p>담긴 상품이 없습니다.</p>
        ) : (
          cart.map((item, idx) => (
            <div key={`${item.id}-${idx}`} style={{ marginBottom: 8 }}>
              <span>
                {item.name} - {item.price.toLocaleString()}원
              </span>
              <button
                onClick={() => handleRemove(item.id)}
                style={{ marginLeft: 10 }}
              >
                삭제
              </button>
            </div>
          ))
        )}
      </div>

      <div>
        <h2>결제 금액</h2>
        <p>총 합계: {totalPrice.toLocaleString()}원</p>
      </div>
    </div>
  );
}

export default ShoppingCart;
