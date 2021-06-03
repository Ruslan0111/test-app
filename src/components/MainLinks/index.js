import './index.scss';

function MainLinks({ userName }) {
  const links = [
    {
      title: 'Dashboard',
      isActive: false
    },
    {
      title: 'Management',
      isActive: false
    },
    {
      title: 'User',
      isActive: false
    },
    {
      title: userName,
      isActive: true
    }
  ]

  return (
    <div className="main__links">
      <h2>Profile</h2>
      <ul>
        {
          links.map(link => {
            return (
              <li key={link.title} className={link.isActive ? 'active' : ''}>
                {link.title}
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default MainLinks;