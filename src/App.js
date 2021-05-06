import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import RestaurantsList from './RestaurantsList';
import HeaderComponent from './HeaderComponent'
import Restaurant from './Restaurant';
import RestaurantForm from './RestaurantForm';


function App() {
  return (
    <div className="">


      <Router>
        <HeaderComponent />
        <Switch>

          <Route path="/restaurants/:id/edit" component={RestaurantForm} />

          <Route path="/restaurants/:id" component={Restaurant} />

          <Route exact path={["/", "/restaurants"]} component={RestaurantsList} />

        </Switch>
      </Router>


    </div>
  );
}

export default App;
