import { useState, useEffect } from "react";
import { fetchWithAuth } from "../http";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../css/Cart.css";
function Cart() {
  const url_api = "http://localhost:5000/cart";
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const [cartItems, setCartItems] = useState([]);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
  useEffect(() => {
    fetch(url_api, options).then((data)=>data.json()).then((data) => setCartItems(data)).catch((error)=>{console.error('error fetching');
    setError(error.message);
    });
  }, []);
  const handleOrder = ()=>{
    if(cartItems.length === 0 )
        return;
    navigate('/order');
  }
  return (
    <>
      <div className="cart_page">
        <div className="cart_items">
          {error ? (
            <h2>{error}</h2>
          ) : cartItems.length === 0 ? (
            <h2>Cart is empty</h2>
          ) : (
            cartItems.map((item) => (
              <div className="cart_item" key={item.product_id}>
                <div>
                  <h3>{item.product_id}</h3>
                  <p>Price: ${item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
              </div>
            ))
          )}
          <button className="checkout" onClick={handleOrder}>
            Make an order
          </button>
        </div>
      </div>
    </>
  );
}
export default Cart;
