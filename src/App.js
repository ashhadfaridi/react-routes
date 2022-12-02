import { BrowserRouter as Router } from "react-router-dom"
import Sidebar from './components/Sidebar'
import Content from './components/Content'


function App() {
  return (
    <Router>
    <div className="wrapper">
      <Sidebar/>
      <Content/>
    </div>
    
  </Router>
  );
}

export default App;
