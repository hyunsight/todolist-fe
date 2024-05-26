import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

//user 값이 있으면? Todopage : redirect to /login
//PrivateRoute의 경우, 공용으로 사용할 수 있어야 함
//children의 경우, PrivateRoute 안에 있는 자식 컴포넌트에 해당
//- 강제로 children 넘겨주지 않아도 리액트에서 자동으로 넘겨줌
const PrivateRoute = ({ user, children }) => {
   return user ? children : <Navigate to="/login" />
}

export default PrivateRoute
