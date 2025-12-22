import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getOrderById } from "../services/orderService";
import Navbar from "../components/Navbar";

const OrderDetails = () => {
  const { id } = useParams();
  const [order, setOrder] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    getOrderById(id)
      .then((res) => setOrder(res.data))
      .catch(() => setError("Failed to load order details"));
  }, [id]);

  return (
    <>
      <Navbar />
      <div style={{ maxWidth: "600px", margin: "30px auto" }}>
        <h2>Order Details</h2>

        {error && <p style={{ color: "red" }}>{error}</p>}

        {!order ? (
          <p>Loading...</p>
        ) : (
          <div
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "6px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <p><strong>Order ID:</strong> {order.id}</p>
            <p><strong>Product:</strong> {order.product}</p>
            <p><strong>Status:</strong> {order.status}</p>
            <p><strong>Created At:</strong> {order.createdAt}</p>

            <Link to="/orders">
              <button>Back to Orders</button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default OrderDetails;
