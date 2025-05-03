"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";

const data = [
  { name: "Jan", uv: 400 },
  { name: "Feb", uv: 800 },
  { name: "Mar", uv: 600 },
  { name: "Apr", uv: 1200 },
  { name: "May", uv: 900 },
  { name: "Jun", uv: 1700 },
];

const Chart = () => {
  return (
    <motion.div
      className="w-full h-64 bg-gray-800 rounded-2xl p-6 shadow-md"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}>
      <h3 className="text-lg font-semibold mb-4">Performance Overview</h3>
      <ResponsiveContainer width="100%" height="80%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis dataKey="name" stroke="#9CA3AF" />
          <YAxis stroke="#9CA3AF" />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1F2937",
              borderColor: "#374151",
            }}
          />
          <Line type="monotone" dataKey="uv" stroke="#4F46E5" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export default Chart;
