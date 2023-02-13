import React from 'react'
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <div >
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/dropdown'>DropDown</Link>
            </li>
            <li>
                <Link to ='act'>AccordionPage</Link>
            </li>
        </ul>
    </div>
  )
}

export default Header