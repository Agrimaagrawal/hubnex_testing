import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const ProtectedRoute = ( { isAccess, children } ) => {
        if(!isAccess){
            return <Navigate to='/access' replace/>;
        }

  return children
}

export default ProtectedRoute