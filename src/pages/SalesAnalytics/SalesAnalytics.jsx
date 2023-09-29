import React from 'react'
import SalesChart from '../../components/SalesChart/SalesChart'
import './SalesAnalyticsStyle.scss'
import ProductChart from '../../components/SalesChart/ProductChart'
function SalesAnalytics() {
  return (
    <div className='SalesContainer'>
        <div className='SalesAnalytics'>
            <span className='SalesAnalyticsText'>Sales Analytics</span>
            <div className='chartAnalytics'>
                <ProductChart/>
            </div>
            <div className='chartAnalytics'>
            <SalesChart/>
            </div>
        </div>
    </div>
  )
}

export default SalesAnalytics



 