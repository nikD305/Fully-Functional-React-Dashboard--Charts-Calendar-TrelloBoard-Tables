import React from 'react'
import { groupNumber, ordersData } from '../../data'
import OrdersPieChart from '../orderspiechart/OrdersPieChart'
import css from './Orders.module.css'
const Orders = () => {
  return (
    <div className={`${css.container} theme-container`}>
         <div className={css.head}>
            <img src="https://cdn.dribbble.com/users/60166/screenshots/15558186/media/fa6bd0b894439dd443fa89956d74719b.jpg?compress=1&resize=400x300&vertical=top" alt="logo" />
            <span>Oders today</span>
         </div>
     <div className={`${css.stat} grey-container`}>

         <span>Amount</span> <span>${groupNumber(4785)}</span>
     </div>
    
     <div className={css.orders}>
        {
            ordersData.map((order,index)=>{
               return (
               <div className={css.order} key={index}>

                    <div>
                        <span>{order.name}</span>
                        <span>+{order.change}</span>
                    </div>
                    <div>
                        <span>{order.type}</span>
                        <span>Item:{order.items}</span>
                    </div>
                </div>)
            })
        }
     </div>


<div className={css.orderCharts}>
    <span>
        Split by Orders
    </span>
    <OrdersPieChart/>
</div>

    </div>
  )
}

export default Orders