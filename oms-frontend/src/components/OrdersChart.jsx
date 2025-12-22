import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from "recharts";

const OrdersChart = ({ orders }) => {
  const data = [
    { name: "Pending", value: orders.filter(o => o.status === "PENDING").length },
    { name: "Completed", value: orders.filter(o => o.status === "COMPLETED").length },
  ];

  const COLORS = ["#FF8042", "#00C49F"];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie data={data} dataKey="value" nameKey="name" outerRadius={100} label>
          {data.map((entry, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default OrdersChart;
