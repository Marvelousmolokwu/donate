
import {Link, Outlet } from 'react-router-dom'

export const User = () => {
  return (
    <>
      <div>user</div>
      <Link to="/login">login</Link>
      <Outlet/>
      </>
  
  )
}
