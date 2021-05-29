import logo from './logo.svg';
import './App.css';

import HomeIntro from './components/HomeIntro';
import WhatWeDo from './components/WhatWeDo';
import BestSolution from './components/BestSolution';
import Works from './components/Works';
import Plans from './components/Plans';
import Info from './components/Info';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className="Home_container">
        <main>
          <HomeIntro />
          <WhatWeDo />
          <BestSolution />
          <Works />
          <Plans />
          <Info />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}

export default App;
