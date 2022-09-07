import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <div className="App">
      <div className="flex flex-col justify-between h-screen">
        <Navbar />
      </div>
    </div>
  );
}

export default App;
