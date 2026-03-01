function StatusCards({ latest }) {
  const formatTemp = (temp) => {
    return temp === null ? "Sensor Offline" : `${temp} °C`;
  };

  const socColor = latest.soc < 20 ? "red" : "green";

  return (
    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
      <Card title="State of Charge" value={`${latest.soc}%`} color={socColor} />
      <Card title="State of Health" value={`${latest.soh}%`} />
      <Card title="Voltage" value={`${latest.battery_voltage} V`} />
      <Card title="Current" value={`${latest.current} A`} />
      <Card title="Temperature" value={formatTemp(latest.battery_temp)} />
      <Card title="Charge Cycles" value={latest.charge_cycle} />
    </div>
  );
}

function Card({ title, value, color = "#333" }) {
  return (
    <div
      style={{
        background: "#f4f4f4",
        padding: "20px",
        borderRadius: "10px",
        minWidth: "150px",
        flex: "1",
        color: color,
      }}
    >
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
}

export default StatusCards;