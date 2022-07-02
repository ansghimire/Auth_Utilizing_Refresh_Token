import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { selectCurrentToken } from '../features/auth/authSlice'
import { logOut } from '../features/auth/authSlice'

const Navbar = () => {
    const token = useSelector(selectCurrentToken)
    const dispatch = useDispatch()
    return (
        <>
            <ul style={{display:"flex", justifyContent:"space-between"}}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                {!token &&
                <li>
                    <Link to="/login">Login</Link>
                </li>
                 } 
                {token && 
                <li>
                    <Link to="/dashboard"> Dashboard</Link>
                </li>
                }
                {
                    token &&
                    <li>
                        <button onClick={()=> dispatch(logOut())} style={{cursor:"pointer"}}>
                        logout
                        </button>
                       
                    </li> 
                }

            </ul>
        </>
    )
}

export default Navbar