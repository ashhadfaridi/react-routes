import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Sidebar from './components/Sidebar'
import Content from "./components/Content";
import Login from './login'
function App() {
  const valid = localStorage.getItem("authenticated");
  return (
    // <Router>
      
    //     <div className="wrapper">
    //       <Login/>
    //     {valid} && <Sidebar/>  
          
    //     </div>
     
    // </Router>
   null );
}

export default App;
