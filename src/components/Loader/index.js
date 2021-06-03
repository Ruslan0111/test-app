import './index.scss';

import Spinner from '../../assets/images/spinner2.svg';

function Loader() {
  return (
    <div className="loader">
      <img src={Spinner} alt="" />
    </div>
  )
}

export default Loader;