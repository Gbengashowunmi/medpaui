import React, { useState } from 'react'
import { handlePayment } from '../../component/paymentgateway'

export default function Payment() {
const [data, setData] = useState({})
const handleSubmit =(e)=>{
e.preventDefault()
handlePayment(data.email, parseFloat(data.amount))
}

const handleChange = (e)=>{
  setData({
    ...data, [e.target.name]:e.target.value
  })
}
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='email' name='email' placeholder='enter email' required onChange={handleChange}/>
        <input type='tel'  name="amount" placeholder='amount' required onChange={handleChange}/>
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}
