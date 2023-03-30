import './Sidebar.css'
import Logo from '../../img/logo.png'
import { SideBarData } from '../../Data/Data';
import {UilSignOutAlt, UilBars} from "@iconscout/react-unicons"
import {motion} from 'framer-motion'
import { useState } from 'react';
function Sidebar(){
    const [selected, setSelected] = useState(0)
    const [expanded, setExpanded] = useState(true)

    const SidebarVariants = {
        true: {
            left: '0'
        },
        false: {
            left: '-60%'
        }
    }
    return(
        <>
         <div className='bars' style={expanded ? {left: '60%'} : {left:'5%'}}
            onClick={() => setExpanded(!expanded)}>
                <UilBars/>
            </div>
        <motion.div className='Sidebar'
         variants={SidebarVariants} animate={window.innerWidth<=768? `${expanded}`: ''}>
           
            <div className='logo'>
                <img src={Logo} alt='' />
                <span>
                    Sh<span>o</span>ps 
                </span>
            </div>
            <div className='menu'>
                {SideBarData.map((item, index) => {
                    return(
                        <div className={selected === index ? 'menuItem active': 'menuItem'}
                        key={index} 
                        onClick={() =>setSelected(index)}>
                            <item.icon/>
                            <span>
                                {item.heading}
                            </span>
                        </div>
                    )
                })}
                <div className='menuItem'>
                    <UilSignOutAlt />
                </div>
            </div>
        </motion.div>
        </>
    )
}

export default Sidebar;