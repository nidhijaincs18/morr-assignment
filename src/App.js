import './App.css';
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Series from './components/Series'
import Movies from './components/Movies'
import Footer from './components/Footer';
import Error from './components/Error'
import {fetchData} from './components/fetchData'

class App extends React.Component {
  state = {
    data: {},
    
  }
  async componentDidMount() {
    const Data = await fetchData();
    console.log(Data);
    this.setState({data: Data});
  }


  render(){
    const { data } = this.state;
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/series" exact render={(props) => <Series data= {data} {...props} />}  />
        <Route path="/movies" exact render={(props) => <Movies data= {data} {...props}  />} />
        <Route component={Error} />
      </Switch>
      <Footer/>
    </div>
  </Router>
  );
}
}

export default App;
