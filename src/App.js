import React, {useEffect} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import { connect } from 'react-redux';

//components
import HomePage from './components/HomePage/HomePage'
import {getData} from './components/redux/homePageReducer'



function App(props) {

  useEffect(() => {
    initData()
}, [])

const initData = () => {
  props.getData()
}
  return (
      <Switch>
        <Route exact path="/" render={() => <Redirect to={'/table'}/>} />
        <Route path="/table" render={() => <HomePage 
            human={props.human}
            elf={props.elf}
            dworf={props.dworf}
            hobbit={props.hobbit}/>}/>     
      </Switch>
  );
}

let mapStateToProps = (state) => {
  return {
       human: state.homePage.human,
       elf: state.homePage.elf,
       dworf: state.homePage.dworf,
       hobbit: state.homePage.hobbit,
  }
}

export default connect(mapStateToProps, {getData})(App);
