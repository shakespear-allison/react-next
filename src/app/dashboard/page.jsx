import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

import Chart from "@/components/Chart";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";

const Home = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-900 text-white pt-0 md:pt-0 pb-16 md:pb-0">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <main className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Cards */}
          <div className="bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-lg transition">
            <h3 className="text-lg font-semibold mb-2">Total Balance</h3>
            <p className="text-2xl font-bold">$24,000</p>
            <p className="text-sm text-gray-400 mt-1">+12% from last month</p>
          </div>

          <div className="bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-lg transition">
            <h3 className="text-lg font-semibold mb-2">Earnings</h3>
            <p className="text-2xl font-bold">$7,500</p>
            <p className="text-sm text-gray-400 mt-1">+8% from last month</p>
          </div>

          <div className="bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-lg transition">
            <h3 className="text-lg font-semibold mb-2">New Users</h3>
            <p className="text-2xl font-bold">320</p>
            <p className="text-sm text-gray-400 mt-1">+5% from last week</p>
          </div>

          {/* Charts (placeholder for now) */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3 bg-gray-800 rounded-2xl p-6 mt-6 shadow-md hover:shadow-lg transition">
            <h3 className="text-lg font-semibold mb-4">Performance Overview</h3>
            <div className="h-64 flex items-center justify-center text-gray-500">
              {/* Later we can add real charts */}
              {/* 📈 Chart coming soon... */}
              <Chart />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
