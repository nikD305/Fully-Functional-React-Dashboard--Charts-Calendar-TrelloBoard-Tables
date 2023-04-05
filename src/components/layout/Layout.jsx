import moment from 'moment'
import React from 'react'
import css from './Layout.module.css'
import {BiSearch} from 'react-icons/bi'
import Sidebar from '../siderbar/Sidebar'

import {useLocation ,Navigate, Outlet} from'react-router-dom'
const Layout = () => {

const {pathname} = useLocation()

  return (
    <div className={css.container}>
     <Sidebar/>

{/* here we make Dashboard as default route with this condition , here Sidebar and Layout are both fixed and rest all are its childeren so when we start the app we need any children as default so here we are setting dashboard as default */}
{pathname === '/' && <Navigate to='/dashboard' />}




     <div className={css.dashboard}>
        <div className={css.topBaseGradients}>
            <div className='gradient-red'></div>
            <div className='gradient-orange'></div>
            <div className='gradient-blue'></div>
        </div>

<div className={css.header}>
    <span>{moment().format("dddd, Do MMM YYYY")}</span>

    <div className={css.searchbar}>
        <BiSearch size={20}/>
        <input type="text" placeholder='Search' />

    </div>

<div className={css.profile}>

    {/* <img src="./eren.jpg" alt="person image" /> */}
    <div className={css.details}>
        
    </div>
</div>



{/* Outlet is used to render child routes , the above thing(sidebar and layout) is Parent whose path is '/' and based on what the url is based on that that component will be rendered in the place of Outlet */}


</div>
 <div className={css.content}>
    <Outlet/>
 </div>

     </div>
        </div>
  )
}

export default Layout