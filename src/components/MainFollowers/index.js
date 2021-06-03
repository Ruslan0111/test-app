import './index.scss';

import FollowerCard from '../FollowerCard';

import followerAvatar from '../../assets/images/avatar.png';

function MainFollowers() {
  const followers = [
    {
      name: 'Jenny Wilson',
      address: 'New Ocieton',
      isAlreadyFollowing: false,
      img: followerAvatar
    },
    {
      name: 'Jenny Wilson',
      address: 'New Ocieton',
      isAlreadyFollowing: false,
      img: followerAvatar
    },
    {
      name: 'Jenny Wilson',
      address: 'New Ocieton',
      isAlreadyFollowing: false,
      img: followerAvatar
    },
    {
      name: 'Jenny Wilson',
      address: 'New Ocieton',
      isAlreadyFollowing: false,
      img: followerAvatar
    },
    {
      name: 'Jenny Wilson',
      address: 'New Ocieton',
      isAlreadyFollowing: true,
      img: followerAvatar
    },
    {
      name: 'Jenny Wilson',
      address: 'New Ocieton',
      isAlreadyFollowing: true,
      img: followerAvatar
    },
    {
      name: 'Jenny Wilson',
      address: 'New Ocieton',
      isAlreadyFollowing: false,
      img: followerAvatar
    },
    {
      name: 'Jenny Wilson',
      address: 'New Ocieton',
      isAlreadyFollowing: false,
      img: followerAvatar
    },
    {
      name: 'Jenny Wilson',
      address: 'New Ocieton',
      isAlreadyFollowing: false,
      img: followerAvatar
    }
  ];

  return (
    <div className="main__followers">
      <h3 className="main__followers-title">Followers</h3>
      <div className="main__followers-cards">
        {
          followers.map((follower, index) => {
            return (
              <div className="main__followers-card" key={index}>
                <FollowerCard followerInfo={follower} />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default MainFollowers;