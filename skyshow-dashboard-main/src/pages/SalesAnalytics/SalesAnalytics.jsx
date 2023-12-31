import React, { useEffect } from "react";
import SalesChart from "../../components/SalesChart/SalesChart";
import "./SalesAnalyticsStyle.scss";
import ProductChart from "../../components/SalesChart/ProductChart";
import { analysis, login } from "../../utils/fetch";

function SalesAnalytics() {
  const data = async () => {
    const response = await analysis();
    await login();
    console.log(response);
  };

  useEffect(() => {
    data();
  }, []);

  return (
    <div className="SalesContainer">
      <div className="SalesAnalytics">
        <span className="SalesAnalyticsText">Sales Analytics</span>
        <div className="chartAnalytics">
          <ProductChart />
        </div>
        <div className="chartAnalytics">
          <SalesChart />
        </div>
      </div>
    </div>
  );
}

export default SalesAnalytics;
