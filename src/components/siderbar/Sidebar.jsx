import React from 'react'
import css from './Sidebar.module.css'
import {MdSpaceDashboard} from "react-icons/md"
import {AiFillCalendar ,AiOutlineTable} from "react-icons/ai"
import {FaTasks} from 'react-icons/fa'
import {NavLink} from'react-router-dom'
const Sidebar = () => {
  return (
    <div className={css.container}>
            <img src="https://cdn.dribbble.com/users/60166/screenshots/15558186/media/fa6bd0b894439dd443fa89956d74719b.jpg?compress=1&resize=400x300&vertical=top" alt="logo" className={css.logo} />     
            <div className={css.menu}>
                <NavLink to="dashboard" className={css.item} title={"Dashboard"}>

                    <MdSpaceDashboard size={30}/>
                </NavLink>
<NavLink to="calender" className={css.item} title="Calendar">
    <AiFillCalendar size={30}/>
</NavLink>

<NavLink to="board" className={css.item} title="Trello Board">
    <FaTasks size={30}/>
</NavLink>

<NavLink to="users" className={css.item} title="Users">
    <AiOutlineTable size={30}/>
</NavLink>




            </div>

    </div>
  )
}

export default Sidebar