import { useState } from "react";
import { motion } from "framer-motion";
import BarChartComponent from "./ui/Barchart";
import PieChartComponent from "./ui/PieChart";
import AnimatedCounter from "./ui/AnimatedCounter";

const Dashboard = () => {
  const [data, setData] = useState({
    barData: [
      { name: "2021", value: 400 },
      { name: "2022", value: 600 },
      { name: "2023", value: 800 },
    ],
    pieData: [
      { name: "Product A", value: 400 },
      { name: "Product B", value: 300 },
      { name: "Product C", value: 300 },
    ],
  });

  return (
    <div className="container mx-auto p-8 max-w-7xl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div
          className="bg-white p-6 rounded-lg shadow-lg max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl mb-4">売上推移</h2>
          <BarChartComponent data={data.barData} />
        </motion.div>

        <motion.div
          className="bg-white p-6 rounded-lg shadow-lg max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl mb-4">製品別売上比率</h2>
          <PieChartComponent data={data.pieData} />
        </motion.div>

        <motion.div
          className="bg-white p-6 rounded-lg shadow-lg max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl mb-4">従業員数</h2>
          <AnimatedCounter endValue={1234} />
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
