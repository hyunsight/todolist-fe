import React from 'react'
import { useNavigate } from 'react-router-dom'

const Logout = ({ user, setUser }) => {
   const navigate = useNavigate()

   const handleLogout = (event) => {
      event.preventDefault()

      try {
         sessionStorage.removeItem('token')
         setUser(null)
         navigate('/login')
      } catch (error) {
         console.log('error', error)
      }
   }

   return (
      <div className="user-info">
         <div>{user.name}님</div>
         <button className="button-primary" onClick={handleLogout}>
            로그아웃
         </button>
      </div>
   )
}

export default Logout
