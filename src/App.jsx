import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="header">
          <h4 className="title">Live User Filter</h4>
          <small className="subtitle">Search by name and/or location</small>
          <input type="text" placeholder="Search" />
        </header>
        <ul className="user-list">
          <li>
            <h3>Loading...</h3>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
