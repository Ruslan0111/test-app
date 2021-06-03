import './index.scss';

import locationIcon from '../../assets/images/location.svg';
import checkIcon from '../../assets/images/check.svg';

function FollowerCard({ followerInfo }) {
  return (
    <div className="follower__card">
      <div className="follower__card-left">
        <div className="follower__card-left-img">
          <img src={followerInfo.img} alt="" />
        </div>
        <div className="follower__card-left-info">
          {followerInfo.name}
          <span>
            <img src={locationIcon} alt="" />
            {followerInfo.address}
          </span>
        </div>
      </div>
      <div className="follower__card-right">
        {
          !followerInfo.isAlreadyFollowing ? 
            <button className="follower__card-right-btn">Follow</button>
          : (
              <div className="follower__card-right-followed">
                <img src={checkIcon} alt="" />
                Followed
              </div>
            )
        }
      </div>
    </div> 
  )
}

export default FollowerCard;