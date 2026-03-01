import { useEffect, useState } from "react";
import StatusCards from "./StatusCards";
import BatteryChart from "./BatteryChart";
import data from "../data/batteryData.json";

function Dashboard() {
  const [batteryData, setBatteryData] = useState([]);

  useEffect(() => {
    setBatteryData(data);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Battery Telemetry Dashboard</h1>

      {batteryData.length > 0 && (
        <>
          <StatusCards latest={batteryData[batteryData.length - 1]} />
          <BatteryChart data={batteryData} />
        </>
      )}
    </div>
  );
}

export default Dashboard;