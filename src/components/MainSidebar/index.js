import { Redirect } from 'react-router-dom';

import './index.scss';

import user from '../../assets/images/user.svg';
import logo from '../../assets/images/logo.png';
import dashboard from '../../assets/images/dashboard.png'

function MainSidebar({ userName, isSidebaShown, showSidebarHandler }) {
  return (
    <section className={`sidebar ${isSidebaShown ? 'active' : ''}`}>
      <div className="sidebar__inner">
        <div className="sidebar__logo">
          <img src={logo} alt="" />
          <div
            className={`sidebar__burger ${isSidebaShown ? 'active' : ''}`}
            onClick={() => showSidebarHandler(false)}
          >
            <span></span>  
          </div>
        </div>
        <div className="sidebar__user">
          <div className="sidebar__user-img">
            <img src={user} alt="" />
          </div>
          <div className="sidebar__user-info">
            <p>
              {userName}
              <span>Admin</span>
            </p>
          </div>
        </div>
        <div className="sidebar__menu">
          <ul className="sidebar__list">
            <li className="sidebar__list-title">general</li>
            <li>
              <a href="#" className="sidebar__link active">
                <img src={dashboard} alt="" />
                <span>Dashboard</span>
              </a>
            </li>
            <li>
              <a href="#" className="sidebar__link">
                <img src={dashboard} alt="" />
                <span>E-Commerce</span>
              </a>
            </li>
            <li>
              <a href="#" className="sidebar__link">
                <img src={dashboard} alt="" />
                <span>Blog</span>
              </a>
            </li>
          </ul>
          <ul className="sidebar__list">
            <li className="sidebar__list-title">management</li>
            <li>
              <a href="#" className="sidebar__link">
                <img src={dashboard} alt="" />
                <span>Settings</span>
              </a>
            </li>
            <li>
              <a href="#" className="sidebar__link">
                <img src={dashboard} alt="" />
                <span>Subscription</span>
              </a>
            </li>
          </ul>
          <ul className="sidebar__list">
            <li className="sidebar__list-title">apps</li>
            <li>
              <a href="#" className="sidebar__link">
                <img src={dashboard} alt="" />
                <span>Mail</span>
              </a>
            </li>
            <li>
              <a href="#" className="sidebar__link">
                <img src={dashboard} alt="" />
                <span>Chat</span>
              </a>
            </li>
            <li>
              <a href="#" className="sidebar__link">
                <img src={dashboard} alt="" />
                <span>Calendar</span>
              </a>
            </li>
          </ul>
          <ul className="sidebar__list">
            <li className="sidebar__list-title">pages</li>
            <li>
              <a href="#" className="sidebar__link">
                <img src={dashboard} alt="" />
                <span>Auth</span>
              </a>
            </li>
            <li>
              <a href="#" className="sidebar__link">
                <img src={dashboard} alt="" />
                <span>Error</span>
              </a>
            </li>
            <li>
              <a href="#" className="sidebar__link">
                <img src={dashboard} alt="" />
                <span>Landing Page</span>
              </a>
            </li>
            <li>
              <a href="#" className="sidebar__link">
                <img src={dashboard} alt="" />
                <span>Pricing</span>
              </a>
            </li>
            <li>
              <a href="#" className="sidebar__link">
                <img src={dashboard} alt="" />
                <span>Payments</span>
              </a>
            </li>
          </ul>
          <ul className="sidebar__list">
            <li className="sidebar__list-title">ui kits</li>
            <li>
              <a href="#" className="sidebar__link">
                <img src={dashboard} alt="" />
                <span>Foundations</span>
              </a>
            </li>
            <li>
              <a href="#" className="sidebar__link">
                <img src={dashboard} alt="" />
                <span>Components</span>
              </a>
            </li>
            <li>
              <a href="#" className="sidebar__link">
                <img src={dashboard} alt="" />
                <span>Charts</span>
              </a>
            </li>
            <li>
              <a href="#" className="sidebar__link">
                <img src={dashboard} alt="" />
                <span>Map</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default MainSidebar;