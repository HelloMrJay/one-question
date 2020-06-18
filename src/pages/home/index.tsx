import React, { useEffect } from 'react';
import BaseLayout from '../layout/BaseLayout'
import { Route, useHistory } from "react-router-dom";
import UserList from "../user/list";

const Home: React.FC = () => {
  const history = useHistory()

  useEffect(() => {
    !localStorage.getItem('USER_INFO') && history.push('/login')
  }, [])
  return (
    <div className="home-container">
      <BaseLayout>
        <Route path="/user/list" component={UserList} />
      </BaseLayout>
    </div>
  )
}

export default Home;
