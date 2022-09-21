import React from 'react'
import './Ad.css'

import { BiPhone } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";


const AddedCont = () => {
  return (
    <div className='add_contact' > 
        <div className='add_contact_div'>
        <div>
            <BiPhone /><span style={{letterSpacing: "3px"}}>&nbsp; 8369480040</span>
        </div>
        <div>
            <AiOutlineMail /><span style={{letterSpacing: "3px"}}>&nbsp; bhaveshs0770@gmail.com</span>
        </div>
        </div>
    </div>
  )
}

export default AddedCont