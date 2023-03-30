import React from 'react'
import Orders from '../../components/orders/Orders'
import Statistics from '../../components/statistics/Statistics'
import { cardsData, groupNumber } from '../../data'
import css from './Dashboard.module.css'
const Dashboard = () => {
  return (
<div className={css.container} >
{/* left */}
      <div className={css.dashboard}>
       <div className={`${css.dashboardHead} theme-container`}>
        <div className={css.head}>
          <span>Dashboard</span>

          <div className={css.durationButton}>
            <select>
              <option value="">1 week</option>
              <option value="">1 month</option>
              <option value="">1 year</option>
            </select>
          </div>

        </div>
          <div className={css.cards}>
             {
              cardsData.map((card , index)=>{
               return (
               <div className={css.card} key={index}>
                   <div className={css.cardHead}>
                      <span>{card.title}</span>  
                      <span>+{card.change}</span>  
                    </div> 

                    <div className={css.cardAmount}>
                      <span>$</span>
                      <span>{groupNumber(card.amount)}</span>
                    </div>
                </div>)
              })
             }
          </div>
       </div>

       <Statistics/>
           
      </div>





{/* right */}
      
<Orders/>
    


    </div>
  )
}

export default Dashboard