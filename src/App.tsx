import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import AppRoutes from "./Routes";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;
