import React from 'react';
import './App.css';
import { Switch, Route, withRouter, Link } from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import PoemSearch from './PoemSearch';
import PoemList from './PoemList';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div>
          <Link to ='/poemSearch'>Search</Link> | <Link to='/'>Results</Link>
        </div>
        <h1>poetry search app</h1>
        <Switch>
          <Route exact path='/' render={()=><PoemList poems={this.props.poems}/>} />
          <Route path='/poemSearch' render={()=><PoemSearch inputAuthor={this.props.inputAuthor} inputKeyword={this.props.inputKeyword}/>}/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = initialState => {
  return {
    inputAuthor: initialState.inputAuthor,
    inputKeyword: initialState.inputKeyword,
    poems: initialState.searchResults
  }
}

App.propTypes = {
  inputAuthor: PropTypes.string,
  inputKeyword: PropTypes.string,
  poems: PropTypes.array
}

export default withRouter(connect(mapStateToProps)(App));
