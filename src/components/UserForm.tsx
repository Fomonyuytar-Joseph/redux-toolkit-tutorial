import React from 'react'
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store';
import { updateUsername ,updateEmail} from '../store/user/userSlice';

const UserForm = () => {
    const dispatch = useDispatch<AppDispatch>()
  return (
    <form>
      <div>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          onChange={(e) => {
            dispatch(updateUsername(e.target.value));
          }}
        />
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          onChange={(e) => {
            dispatch(updateEmail(e.target.value));
          }}
        />
      </div>
      <button>Save</button>
    </form>
  );
}

export default UserForm