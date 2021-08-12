import { useEffect, useState } from 'react';
import './App.scss';

function App() {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const count = 50;
      const res = await fetch(`https://randomuser.me/api?results=${count}`);
      const data = await res.json();

      setUsers(data.results);
    } catch (err) {
      console.error(err);
      console.log('Something is not good');
    }
  };

  return (
    <div className="App">
      <div className="container">
        <header className="header">
          <h4 className="title">Live User Filter</h4>
          <small className="subtitle">Search by name and/or location</small>
          <input type="text" placeholder="Search" />
        </header>
        <ul className="user-list">
          {!users ? (
            <li>
              <h3>Loading...</h3>
            </li>
          ) : (
            users.map((user) => (
              <li key={user.login.uuid}>
                <img src={user.picture.large} alt={user.name.first} />
                <div className="user-info">
                  <h4>
                    {user.name.first} {user.name.last}
                  </h4>
                  <p>
                    {user.location.city}, {user.location.country}
                  </p>
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
