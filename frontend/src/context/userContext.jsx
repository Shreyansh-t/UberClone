import React, { createContext } from 'react'

export const UserDataContext = createContext()

const userContext = ({children}) => {

    const [user, setUser] = useState({
        email: '',
        fullName:{
            firstname: '',
            lastName: ""
        }
    })

  return (
    <div>
        <UserDataContext.Provider value={[user, setUser]}>
            {children}
        </UserDataContext.Provider>
    </div>
  )
}

export default userContext