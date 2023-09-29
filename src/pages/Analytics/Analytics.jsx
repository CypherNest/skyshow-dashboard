import React from 'react'
import "./analytics.scss"
import UsersChart from '../../components/UsersChart/UsersChart'

function Analytics() {
  return (
    <div className='analyticsContainer'>
      {/* ====users analytics============= */}
      <div className='UserAnalytics'>
        <span className='usersAnalyticsText'>New Users Analytics</span>
       <div className='chartAnalytics'>
        <UsersChart/>
       </div>
      </div>
    </div>
  )
} 

export default Analytics
