import React from 'react'
import { RootState } from '../store'
import { useSelector } from 'react-redux'

const UserDetails = () => {
    const userSlice = useSelector((state:RootState)=>state.user)
  return (
    <div>
      <h1>User Details</h1>
      <div>
        <span>{userSlice.id}</span>
      </div>
      <div>
        <span>{userSlice.username}</span>
      </div>
      <div>
        <span>{userSlice.email}</span>
      </div>
    </div>
  );
}

export default UserDetails