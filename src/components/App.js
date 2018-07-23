import React from 'react';
import './App.css';
import { Switch, Route, withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import PoemSearch from './PoemSearch';
import PoemList from './PoemList';

class App extends React.Component {

  onAuthorChange = (e) => {
    let {dispatch} = this.props;
    dispatch({type: 'SEARCH_AUTHOR', inputAuthor: e.target.value})
  }

  onKeywordChange = (e) => {
    let {dispatch} = this.props;
    dispatch({type: 'SEARCH_KEYWORD', inputKeyword: e.target.value})
  }

  onSearch = () => {
    let {dispatch} = this.props;
    let {inputAuthor} = this.props;
    let {inputKeyword} = this.props;
    fetch(`http://poetrydb.org/author,title/${inputAuthor};${inputKeyword}`)
      .then(response => {
        return response.json()
      })
      .then(response => {
        dispatch({type: 'FETCH_POEMS', searchResults: response})
      })
  }


  render() {
    const poems = this.props.searchResults.map(poem => (
      <div key={poem.id}>
        <h2>{poem.title}</h2>
        <h4>{poem.author}</h4>
        <pre>{poem.lines.join('\n')}</pre>
      </div>
    ));
    return (
      <div className="App">
        <h1>poetry search app</h1>
        <Switch>
          <Route exact path='/' render={()=><PoemList poems={this.props.searchResults}/>} />
          <Route path='/poemSearch' render={()=><PoemSearch />}/>
        </Switch>
        <p>search by author:</p>
        <input type='text' placeholder='author' onChange={this.onAuthorChange} value={this.props.inputAuthor} />
        <p>and/or search by theme:</p>
        <label><input type='radio' value='anniversary' onChange={this.onKeywordChange} checked={this.props.inputKeyword === 'anniversary'}/><span>Anniversary</span></label>
        <br />
        <label><input type='radio' value='birthday' onChange={this.onKeywordChange} checked={this.props.inputKeyword === 'birthday'}/><span>Birthday</span></label>
        <br />
        <label><input type='radio' value='farewell' onChange={this.onKeywordChange} checked={this.props.inputKeyword === 'farewell'}/><span>Breakup</span></label>
        <br />
        <label><input type='radio' value='romance' onChange={this.onKeywordChange} checked={this.props.inputKeyword === 'romance'}/><span>Casual Hookup</span></label>
        <br />
        <label><input type='radio' value='celebrate' onChange={this.onKeywordChange} checked={this.props.inputKeyword === 'celebrate'}/><span>Congratulations</span></label>
        <br />
        <label><input type='radio' value='father' onChange={this.onKeywordChange} checked={this.props.inputKeyword === 'father'}/><span>Fathers Day</span></label>
        <br />
        <label><input type='radio' value='death' onChange={this.onKeywordChange} checked={this.props.inputKeyword === 'death'}/><span>Funeral</span></label>
        <br />
        <label><input type='radio' value='fear' onChange={this.onKeywordChange} checked={this.props.inputKeyword === 'fear'}/><span>Halloween</span></label>
        <br />
        <label><input type='radio' value='mother' onChange={this.onKeywordChange} checked={this.props.inputKeyword === 'mother'}/><span>Mothers Day</span></label>
        <br />
        <label><input type='radio' value='spring' onChange={this.onKeywordChange} checked={this.props.inputKeyword === 'spring'}/><span>Spring</span></label>
        <br />
        <label><input type='radio' value='thank' onChange={this.onKeywordChange} checked={this.props.inputKeyword === 'thank'}/><span>Thank You</span></label>
        <br />
        <label><input type='radio' value='love' onChange={this.onKeywordChange} checked={this.props.inputKeyword === 'love'}/><span>Wedding</span></label>
        <br/><br/>

        <button onClick={this.onSearch}>find poems</button>
        <h3>{this.props.inputKeyword}</h3>
        <div>{poems}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    inputAuthor: state.inputAuthor,
    inputKeyword: state.inputKeyword,
    searchResults: state.searchResults,
  }
}

export default connect(mapStateToProps)(App);
