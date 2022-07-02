import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import Navbar from "../components/Navbar";

import { useReloadMutation } from "../features/auth/authLoadSlice";
import { setCredentials, logOut } from "../features/auth/authSlice";

const Layout = () => {
  const [ReloadTok, { isLoading }] = useReloadMutation()
  const Dispatch = useDispatch()



  // TO get new access token from existing refresh token when page load for the first time or refresh
  useEffect(() => {
    const tok = localStorage.getItem("refresh")
    if (tok) {

      const reload = async () => {
        try {

          const data = await ReloadTok(tok).unwrap()
          Dispatch(setCredentials(data))

        } catch (err) {
          Dispatch(logOut())
        }

      }
      reload()
    }

  }, [Dispatch, ReloadTok])


  return (
    isLoading ? <h1>Loading</h1> :
      <>
        <Navbar />
        <Outlet />
      </>
  )
}

export default Layout