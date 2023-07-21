import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "january",
    customers: 4000,
    income: 2400,
    amt: 2400
  },
  {
    name: "february",
    customers: 3000,
    income: 1398,
    amt: 2210
  },
  {
    name: "march",
    customers: 2000,
    income: 9800,
    amt: 2290
  },
  {
    name: "april",
    customers: 2780,
    income: 3908,
    amt: 2000
  },
  {
    name: "may",
    customers: 1890,
    income: 4800,
    amt: 2181
  },
  {
    name: "june",
    customers: 2390,
    income: 3800,
    amt: 2500
  },
  {
    name: "july",
    customers: 3490,
    income: 4300,
    amt: 2100
  },
  {
    name: "august",
    customers: 3490,
    income: 4300,
    amt: 2100
  },
  {
    name: "september",
    customers: 3490,
    income: 4300,
    amt: 2100
  },
  {
    name: "october",
    customers: 3490,
    income: 4300,
    amt: 2100
  },
  {
    name: "november",
    customers: 3490,
    income: 4300,
    amt: 2100
  },
  {
    name: "december",
    customers: 3490,
    income: 4300,
    amt: 2100
  },
];

const Chart = () => {
  return (
    <BarChart
    width={1260}
      height={400}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="customers" fill="#7dd3fc" />
      <Bar dataKey="income" fill="#fcd34d" />
    </BarChart>
  );
}

export default Chart;
