import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import OrdersChart from "../components/OrdersChart";
import { getOrders } from "../services/orderService";

const Dashboard = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getOrders().then(res => setOrders(res.data));
  }, []);

  return (
    <>
      <Navbar />
      <div style={{ maxWidth: "900px", margin: "40px auto", textAlign: "center" }}>
        <h1>Order Management System</h1>
        <p>Quick Overview</p>

        <div style={{ display: "flex", justifyContent: "space-around", marginTop: "40px" }}>
          <OrdersChart orders={orders} />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
