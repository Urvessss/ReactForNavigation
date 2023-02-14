import React from 'react'
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <div className='flex justify-between p-3 bg-gray-50 border-b items-center' >
       <div className='flex'>
        <ul className='flex'>
            <li className='p-1 m-1'>
                <Link to='/'>Home</Link>
            </li>
            <li className='p-1 m-1'>
                <Link to='/dropdown'>DropDown</Link>
            </li>
            <li className='p-1 m-1'>
                <Link to ='act'>AccordionPage</Link>
            </li>
            <li className='p-1 m-1'>
                <Link to ='model'>Model</Link>
            </li>
            <li className='p-1 m-1'>
                <Link to ='table'>TableSort</Link>
            </li>
            <li className='p-1 m-1'>
                <Link to ='stateCount'>StateCount</Link>
            </li>
            <li className='p-1 m-1'>
                <Link to ='reducerCount'>ReducerCount</Link>
            </li>
        </ul>
        </div>
    </div>
  )
}

export default Header