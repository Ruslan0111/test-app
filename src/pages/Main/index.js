import { useState } from 'react';
import { Redirect } from 'react-router-dom';

import './index.scss';

import user from '../../assets/images/user.svg';
import logo from '../../assets/images/logo.png';
import dashboard from '../../assets/images/dashboard.png'

import MainSidebar from '../../components/MainSidebar';
import MainTop from '../../components/MainTop';
import MainLinks from '../../components/MainLinks';
import MainOverview from '../../components/MainOverview';
import MainFollowers from '../../components/MainFollowers';

function Main() {
  const [showSidebar, setShowSidebar] = useState(false);

  const currentUser = JSON.parse(sessionStorage.getItem('user'));

  return (
    <>
      {
        !currentUser ? (<Redirect to="login" />)
        : (
          <div className="dashboard">
            <MainSidebar
              showSidebarHandler={setShowSidebar}
              isSidebaShown={showSidebar}
              userName={currentUser.displayName}
            />
            <MainTop showSidebarHandler={setShowSidebar} isSidebaShown={showSidebar} />
            <MainLinks userName={currentUser.displayName} />
            <MainOverview userName={currentUser.displayName} />
            <MainFollowers />
          </div>
        )
      }
    </>
  );
}

export default Main;