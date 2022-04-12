import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import UserInfo from './Components/UserInfo';


import InsurancePlans from './Components/InsurancePlans';

function App() {
  return (
    <div className="insuranceImage" >
      <Router>

        <Route path='/' exact render={() => (
          <InsurancePlans />
        )
        }
        />
        <Route path='/userInfo' component={UserInfo} />
      </Router>
    </div>


  );
}

export default App;
