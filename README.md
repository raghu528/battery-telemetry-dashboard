# Battery Telemetry Dashboard

Assessment Submission for iTarang Technologies Pvt Ltd  
Full Stack Developer  


##  Overview
This dashboard visualizes IoT battery telemetry data for non-technical dealers and operations managers.

## Features Implemented

- Status Overview (Latest SoC, SoH, Voltage, Current, Temp, Charge Cycle)
- Time-Series Chart (SoC over time)
- Human-readable timestamp conversion
- Null temperature handling
- Conditional styling (Low SoC alert)
- Responsive layout

## Tech Stack

- React (Vite)
- Recharts
- CSS Flexbox

## How to Run

```bash
npm install
npm run dev
```

## Design Decisions

- Imported JSON statically for assessment.
- Used `new Date(timestamp).toLocaleString()` for readable time.
- Displayed "Sensor Offline" for null temperature.
- Highlighted SoC below 20% in red for visibility.
