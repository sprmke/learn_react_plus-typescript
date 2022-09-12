import { useContext } from 'react';
import { UserContext } from './UserContext';

export const User = () => {
  const userCtx = useContext(UserContext);

  const handleLogin = () => {
    userCtx.setUser({
      name: 'Mike',
      email: 'mike@gmail.com',
    });
  };

  const handleLogout = () => {
    userCtx.setUser(null);
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {userCtx.user?.name}</div>
      <div>User email is {userCtx.user?.email}</div>
    </div>
  );
};
