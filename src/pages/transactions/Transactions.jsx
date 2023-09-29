import React from 'react'
import "./transaction.scss"
import List from '../../components/transaction/TransactionTable'

function Transactions() {
  return (
    <div className='transactionContainer'>
        <div className="transaction">
        <span className="pageTitle">Transactions</span>
        <div className="transactionContent">
          <List/>
        </div>
        </div>
    </div>
  )
}

export default Transactions
