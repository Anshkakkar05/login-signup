import { Navbar } from "./Components/Navbar";
// import img1 from "./assets/img1.jpg";

import "bootstrap/dist/css/bootstrap.min.css";
import Dummy from "./Dummy";
function App() {
  return (
    <div className="App">
      <Navbar logo="ReactApp" home="Home" about="About" />
      <Dummy favColor="yellow" />
    </div>
  );
}

export default App;
