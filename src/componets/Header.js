import React from 'react'
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <div className='flex justify-between p-3 bg-gray-50 border-b items-center' >
       <div className='flex'>
        <ul className='flex'>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/dropdown'>DropDown</Link>
            </li>
            <li>
                <Link to ='act'>AccordionPage</Link>
            </li>
            <li>
                <Link to ='model'>Model</Link>
            </li>
        </ul>
        </div>
    </div>
  )
}

export default Header