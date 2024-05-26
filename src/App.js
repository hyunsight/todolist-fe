import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import TodoPage from './pages/TodoPage'
import RegisterPage from './pages/RegisterPage'
import PrivateRoute from './route/PrivateRoute'
import api from './utils/api'

/*
로그인 심화

1.로그인을 했다면, 로그인 페이지로 돌아갈 수 없다.
-로그인을 했으면 토큰을 저장한다.
-토큰값을 읽어온다.
-토큰이 사용 가능한 토큰인지 체크한다. (토큰이 만료되지 않고, 토큰을 해독했을 때 유저 ID가 있다.) => 백엔드
 :토큰이 사용 가능하면, 토큰을 바탕으로 유저 객체를 보내준다.
-유저값을 저장을 한다.
-유저가 있다면 투두 페이지를 보여준다.

2.로그인을 안했다면, 투두 페이지로 돌아갈 수 없다.
*/

function App() {
   const [user, setUser] = useState(null)

   const getUser = async () => {
      //토큰을 통해 유저정보를 가져온다.
      try {
         const storedToken = sessionStorage.getItem('token')

         // const response = api.get('/user/')
         if (storedToken) {
            // api.default.headers['authorization'] = 'Bearer ' + storedToken
            const response = await api.get('/user/me')
            // console.log('rrrrr', response)

            setUser(response.data.user)
         }
      } catch (error) {
         setUser(null)
      }
   }

   useEffect(() => {
      getUser()
   }, [])

   return (
      <Routes>
         <Route
            path="/"
            element={
               <PrivateRoute user={user}>
                  <TodoPage user={user} setUser={setUser} />
               </PrivateRoute>
            }
         />
         <Route path="/register" element={<RegisterPage />} />

         <Route
            path="/login"
            element={<LoginPage user={user} setUser={setUser} />}
         />
      </Routes>
   )
}

export default App
