import React from 'react'
import { Link} from 'react-router-dom'
import { useState } from 'react'
const Header = () => {
  const [app, isapp] = useState(false);

  return (
    <div><p> hello</p>
    
<ul> 
    <li> 1</li>

    <li>2 </li>

    <li> 3</li>

    <li>3 </li>

    <li> 4</li>

    <li>< a href='# '> press </a> </li>

    
    </ul>    
    </div>

    
  )
}

export default Header