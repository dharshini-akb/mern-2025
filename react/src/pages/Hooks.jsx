import React from 'react'
import {Link} from 'react-router-dom'
const Hooks =() =>
{
    return (
        <div style={{display:"flex",flexDirection:"column"}}>
            <h2>React Hooks page</h2>
        <Link to='/State'>useState</Link>
          <Link to='/effect'>Effect</Link>
            <Link to='/effect2'>Effect2</Link>
        
        </div>
    )
}
export default Hooks