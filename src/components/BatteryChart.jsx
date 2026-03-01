import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

function BatteryChart({ data }) {
  const formattedData = data.map((item) => ({
    ...item,
    timeFormatted: new Date(item.time).toLocaleString(),
  }));

  return (
    <div style={{ marginTop: "40px" }}>
      <h2>State of Charge Over Time</h2>

      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={formattedData}>
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="timeFormatted" hide />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="soc" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default BatteryChart;