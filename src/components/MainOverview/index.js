import { useState } from 'react';

import './index.scss';

function MainOverview({ userName }) {
  const [activeLink, setActiveLink] = useState('profile');

  return (
    <div className="main__overiew">
      <div className="main__overiew-top">
        <div className="main__overiew-user">
          <div className="main__overiew-user-left">
            <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
              <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
            </svg>
          </div>
          <p className="main__overiew-user-right">
            { userName }
            <span>Designer</span>
          </p>
        </div>
      </div>
      <div className="main__overiew-nav">
        <ul>
          <li
            className={activeLink === 'profile' ? 'active' : ''}
            onClick={() => setActiveLink('profile')}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M0.5 2.16667V13.8333C0.5 14.75 1.24167 15.5 2.16667 15.5H13.8333C14.75 15.5 15.5 14.75 15.5 13.8333V2.16667C15.5 1.25 14.75 0.5 13.8333 0.5H2.16667C1.24167 0.5 0.5 1.25 0.5 2.16667ZM10.5 5.5C10.5 6.88333 9.38333 8 8 8C6.61667 8 5.5 6.88333 5.5 5.5C5.5 4.11667 6.61667 3 8 3C9.38333 3 10.5 4.11667 10.5 5.5ZM8 9.58333C6.33333 9.58333 3 10.5 3 12.1667V13H13V12.1667C13 10.5 9.66667 9.58333 8 9.58333Z" fill="#637381"/>
            </svg>
            Profile
          </li>
          <li
            className={activeLink === 'followers' ? 'active' : ''}
            onClick={() => setActiveLink('followers')}
          >
            <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.99997 14.5C8.77847 14.5013 8.56557 14.4143 8.40831 14.2583L1.93331 7.77501C0.242934 6.06698 0.242934 3.31639 1.93331 1.60835C3.63759 -0.0911287 6.39569 -0.0911287 8.09997 1.60835L8.99997 2.50835L9.89997 1.60835C11.6043 -0.0911287 14.3624 -0.0911287 16.0666 1.60835C17.757 3.31639 17.757 6.06698 16.0666 7.77501L9.59164 14.2583C9.43437 14.4143 9.22148 14.5013 8.99997 14.5Z" fill="#637381"/>
            </svg>
            Followers
          </li>
          <li
            className={activeLink === 'friends' ? 'active' : ''}
            onClick={() => setActiveLink('friends')}
          >
            <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M6.49996 7.16667C8.34091 7.16667 9.83329 5.67428 9.83329 3.83333C9.83329 1.99238 8.34091 0.5 6.49996 0.5C4.65901 0.5 3.16663 1.99238 3.16663 3.83333C3.16663 5.67428 4.65901 7.16667 6.49996 7.16667ZM13.1666 8.83333C14.5473 8.83333 15.6666 7.71405 15.6666 6.33333C15.6666 4.95262 14.5473 3.83333 13.1666 3.83333C11.7859 3.83333 10.6666 4.95262 10.6666 6.33333C10.6666 7.71405 11.7859 8.83333 13.1666 8.83333ZM17.3333 13.8333C17.3333 14.2936 16.9602 14.6667 16.5 14.6667H12.3333C12.3333 15.1269 11.9602 15.5 11.5 15.5H1.49996C1.03972 15.5 0.666626 15.1269 0.666626 14.6667C0.669813 12.3108 2.08975 10.1882 4.26598 9.28594C6.44222 8.38374 8.94752 8.87911 10.6166 10.5417C11.8732 9.56926 13.5735 9.39616 15.0002 10.0954C16.427 10.7946 17.3319 12.2444 17.3333 13.8333Z" fill="#637381"/>
            </svg>
            Friends
          </li>
          <li
            className={activeLink === 'gallery' ? 'active' : ''}
            onClick={() => setActiveLink('gallery')}
          >
            <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M18.3333 2.33329H11.6667L10.4917 1.15829C10.175 0.841626 9.75 0.666626 9.30833 0.666626H5C4.08333 0.666626 3.34167 1.41663 3.34167 2.33329L3.33333 12.3333C3.33333 13.25 4.08333 14 5 14H18.3333C19.25 14 20 13.25 20 12.3333V3.99996C20 3.08329 19.25 2.33329 18.3333 2.33329ZM0.833333 3.99996C0.375 3.99996 0 4.37496 0 4.83329V8.16663H0.00833333L0 15.6666C0 16.5833 0.75 17.3333 1.66667 17.3333H15.8333C16.2917 17.3333 16.6667 16.9583 16.6667 16.5C16.6667 16.0416 16.2917 15.6666 15.8333 15.6666H2.5C2.04167 15.6666 1.66667 15.2916 1.66667 14.8333V4.83329C1.66667 4.37496 1.29167 3.99996 0.833333 3.99996ZM9.25833 6.93329L6.33333 10.8333C6.125 11.1083 6.325 11.5 6.66667 11.4916H16.6583C17 11.4916 17.2 11.0916 16.9833 10.8166L14.9083 8.14996C14.7417 7.94163 14.425 7.9333 14.2583 8.14163L12.5083 10.25L9.925 6.92496C9.75 6.70829 9.425 6.71663 9.25833 6.93329Z" fill="#637381"/>
            </svg>

            Gallery
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MainOverview;