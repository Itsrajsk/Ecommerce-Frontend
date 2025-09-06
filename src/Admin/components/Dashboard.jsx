import React from "react";
import Achievement from "./Achievement";
import MonthlyOverview from "./MonthlyOverview";

const Dashboard = () => {
  return (
    <div className="p-10">
      <div className="flex gap-5 w-full">
        {/* Left column (1/3) */}
        <div className="w-1/3">
          <Achievement />
        </div>

        {/* Right column (2/3) */}
        <div className="w-2/3">
          <MonthlyOverview />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
