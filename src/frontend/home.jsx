import React, { useState } from 'react';
import { Button} from 'antd';
import { useHistory } from 'react-router-dom';

// import LoginForm from './login';

export function Home(props) {
  const [count, setCount] = useState(0);
  const history = useHistory();

  function handleCount(){
    setCount(count+1);
  }
  function allowLogin(){
    history.push('/login')
  }
  return (
    <React.Fragment>
      <Button onClick={allowLogin}>Click here to login</Button>
      {/* <LoginForm /> */}
      {/* <h1 onClick={handleCount}>Hello {props.name} and the count is {count}</h1> */}
      {/* <h2>Welcome and experience the magic of server side rendering here</h2> */}
    </React.Fragment>
  );
}
