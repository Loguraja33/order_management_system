import { useEffect, useState } from "react";
import {
  getOrders,
  updateOrder,
  deleteOrder,
} from "../services/orderService";
import Navbar from "../components/Navbar";

import { getUserRole } from "../utils/auth";
import { Navigate } from "react-router-dom";
import { exportToCSV } from "../utils/csv";

const role = getUserRole();
{role === "admin" && (
  <button
    style={{ marginBottom: "10px", background: "#4caf50" }}
    onClick={() => exportToCSV(filteredOrders)}
  >
    Export CSV
  </button>
)}
const CreateOrder = () => {
  if (getUserRole() !== "admin") return <Navigate to="/orders" />;

  // ...rest of the form code
};

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [role, setRole] = useState("");

  const loadOrders = async () => {
    const res = await getOrders();
    setOrders(res.data);
  };

  useEffect(() => {
    loadOrders();
    setRole(getUserRole());
  }, []);

  return (
    <>
      <Navbar />
      <div style={{ maxWidth: "800px", margin: "20px auto" }}>
        <h2>Orders</h2>

        <table width="100%" cellPadding="10">
          <thead>
            <tr style={{ background: "#eee" }}>
              <th>Product</th>
              <th>Status</th>
              {role === "admin" && <th>Actions</th>}
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>
                  <a href={`/orders/${order.id}`}>{order.product}</a>
                </td>
                <td>{order.status}</td>
                {role === "admin" && (
                  <td>
                    <button
                      onClick={() =>
                        updateOrder(order.id, { status: "COMPLETED" }).then(
                          loadOrders
                        )
                      }
                    >
                      Complete
                    </button>
                    <button
                      style={{ background: "#d32f2f" }}
                      onClick={() => deleteOrder(order.id).then(loadOrders)}
                    >
                      Delete
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};


export default Orders;
