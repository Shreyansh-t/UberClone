import React, {useContext, useEffect} from 'react'
import { UserDataContext } from '../context/userContext'
import { useNavigate } from 'react-router-dom'

const UserProtectedWrapper = ({children}) => {

    const token = localStorage.getItem('token')
    console.log(token)
    const navigate = useNavigate()

    useEffect(() =>{
        if(!token){
            navigate('/login')
        }
    }, [token])

  return (
    <div>
        {children}
    </div>
  )
}

export default UserProtectedWrapper