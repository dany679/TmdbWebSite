//components
import Button from '../../Button/Button';
import { Wrapper } from './Login.style';
//hooks
import { useContext, useState } from 'react';
import { AuthContext } from '../../../AuthProvider';
import Home from '../Home';

const Login = () => {
  const [username, setUsername] = useState('');
  const [user, setUser] = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('entrou');
    console.log('user', user);
    console.log('username', username);
  };
  return (
    <Wrapper>
      <label>User Name</label>

      <input
        type='text'
        value={username}
        name='name'
        placeholder='you name hí'

        // onChange={(e) => {
        //   setUsername(e.currentTarget.value);
        // }}
      ></input>
      <Button
        text='Login'
        callback={handleSubmit}
        Onclick={username && setUser({ name: username })}
      />
    </Wrapper>
  );
};

export default Login;
