import "./App.css";
import { Routes, Route } from "react-router-dom";
import Window from "./Navigation/Window";
// import Main from './Navigation/Main';
import Surface from './Navigation/Surface';
import Navigation from "./Navigation/Nav";
import UserInfo from "./Navigation/UserInfo";
import Footer from './Navigation/Footer';
import One from './Navigation/one';
import Second from './Navigation/Second';
import Third from './Navigation/Third';

function App() {
  return (
    <div>
      <Navigation />    
      <Routes>
        <Route path="/" element ={ <UserInfo /> } />
        <Route path="/window" element ={ <Window /> }>
          <Route path="/window" element={<One />} />
          <Route path="/window/second" element={<Second />} />
          <Route path="/window/third" element={<Third />} />
        </Route>
        <Route path="/surface" element ={ <Surface /> } />
      </Routes> 
      <Footer />
    </div>
  );
}

export default App;
