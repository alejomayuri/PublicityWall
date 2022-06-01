import './App.css';
import { AuthProvider } from 'context/AuthContext';
import Header from './components/Header';
import Home from 'pages/Home';

function App() {


  return (
    <AuthProvider>
      <div className="App">
        <div className="App-header">
          <Home />
          <Header />
          <figure className="App-logo">
            <img alt='newAds logo' src='/logo.png' />
          </figure>
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;
