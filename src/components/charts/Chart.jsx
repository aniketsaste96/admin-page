import "./chart.css";
import { ProgressBar } from "react-bootstrap";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";
import { PieChart, Pie, Sector, Cell, Legend } from "recharts";

import { PieChartData, PieChartData2 } from "../../PieChartData.js";

export default function Chart({ title, data, dataKey, grid }) {
  return (
    <div>
      <div className="chart">
        <div className="strokechart">
          <h3 className="chartTitle">User Overview</h3>
          <ResponsiveContainer width={530} height={200} aspect={4 / 2}>
            <LineChart data={data}>
              <XAxis dataKey="name" stroke="#5550bd" />
              <YAxis dataKey="Users" stroke="#5550bd" />
              <Line
                type="monotone"
                dataKey={dataKey}
                stroke="#5550bd"
                activeDot={{ r: 8 }}
                strokeWidth={4}
              ></Line>
              <Tooltip />
              {/* <Legend/> */}
              {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
              <Legend />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="piechart">
          <br />
          <br />
          <br />
          <h3 className="Revenuesrc">Revenue Source</h3>
          <PieChart width={530} height={350}>
            <Pie
              data={PieChartData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={60}
              fill="#8884d8"
            />
            <Pie
              data={PieChartData2}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#82ca9d"
              label
            />
            <Tooltip />
          </PieChart>
        </div>
      </div>
      <div className="progressBar">
        <h3>Projects</h3>
        <hr />
        <ProgressBar animated now={30} label="Server Migration" />
        <br />
        <ProgressBar
          variant="success"
          animated
          now={45}
          label="Customer Database"
        />
        <br />
        <ProgressBar
          variant="danger"
          animated
          now={55}
          label="Payout Details"
        />
        <br />
        <ProgressBar
          variant="warning"
          animated
          now={80}
          label="Account Setup"
        />
      </div>
    </div>
  );
}
