import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation, Navigate, Outlet } from 'react-router-dom'
// import { selectCurrentToken } from '../features/auth/authSlice'
// import {store} from '../app/store'


const ProtectedRoute = () => {
    const token = useSelector(state=> state.auth.access)
    // const token = useSelector(selectCurrentToken)
    const location = useLocation()
    // console.log(token)
  return (
         token ? 
         <Outlet/>:
         <Navigate to="/login" state={{from:location}} replace />
  )
}

export default ProtectedRoute