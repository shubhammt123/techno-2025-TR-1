import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deposite, withdrawl } from './redux/slices/accountSlice';

const Account = () => {

    const {accountBalance} = useSelector((state)=>state.account);

    const [amount , setAmount] = useState(0);

    const dispatch = useDispatch();
  return (
    <div className="container">
        <p>Account Balance : {accountBalance}</p>
        <input type="number" placeholder='Enter amount' onChange={(e)=>{
            setAmount(e.target.value)
        }} value={amount} />
        <button onClick={()=>{
            dispatch(deposite(+amount));
            setAmount(0);
        }}>Deposite</button>
        <button onClick={()=>{
            dispatch(withdrawl(+amount));
            setAmount(0);
        }}>Withdrawl</button>
    </div>

  )
}

export default Account