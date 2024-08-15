import { PureComponent } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    Hospitalized: 4000,
    Recovered: 2400,
    amt: 2400,
  },
  {
    name: "Feb",
    Hospitalized: 3000,
    Recovered: 1398,
    amt: 2210,
  },
  {
    name: "Mar",
    Hospitalized: 2000,
    Recovered: 9800,
    amt: 2290,
  },
  {
    name: "April",
    Hospitalized: 2780,
    Recovered: 3908,
    amt: 2000,
  },
  {
    name: "May",
    Hospitalized: 1890,
    Recovered: 4800,
    amt: 2181,
  },
  {
    name: "June",
    Hospitalized: 2390,
    Recovered: 3800,
    amt: 2500,
  },
  {
    name: "July",
    Hospitalized: 3490,
    Recovered: 4300,
    amt: 2100,
  },
  {
    name: "Aug",
    Hospitalized: 4000,
    Recovered: 2400,
    amt: 2400,
  },
  {
    name: "Sep",
    Hospitalized: 3000,
    Recovered: 1398,
    amt: 2210,
  },
  {
    name: "Oct",
    Hospitalized: 2000,
    Recovered: 9800,
    amt: 2290,
  },
  {
    name: "Nov",
    Hospitalized: 2780,
    Recovered: 3908,
    amt: 2000,
  },
  {
    name: "Dec",
    Hospitalized: 1890,
    Recovered: 4800,
    amt: 2181,
  },
];

export default class PatientsChart extends PureComponent {
  static demoUrl = "https://codesandbox.io/p/sandbox/stacked-bar-chart-7fwfgj";

  render() {
    return (
      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "5px",
          width: "60%",
        }}
      >
        <p
          style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "2rem" }}
        >
          Patients Overview
        </p>
        <ResponsiveContainer width="100%" height={500}>
          <BarChart
            width={300}
            height={300}
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Recovered" stackId="a" fill="#8884d8" />
            <Bar dataKey="Hospitalized" stackId="a" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
