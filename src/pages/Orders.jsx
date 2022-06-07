import React from 'react'
import Card from '../components/Card'
function Orders() {
   return (
    <div className="content p-40">
    <div className="d-flex align-center mb-40 justify-between">
      <h1 >Orders</h1>
    </div>
    <div className="d-flex flex-wrap">
      {[].map((items, index) => (
        <Card/>
          ))}
    </div>
  </div> 
  )
}

export default Orders