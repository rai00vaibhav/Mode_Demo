import React, { Component } from 'react';
import { connect } from 'react-redux';
import {moviesList} from './actions';
import {bindActionCreators} from 'redux';
import Header from './components/Header';
import styles from './App.css';
class App extends Component {

  componentDidMount() {
    this.props.moviesList();
  }

  render() {
    console.log(this.props);
    return (
      <div className="appOuter">
        <div>
          <div className="sideNavbar">
            <Header/>
          </div>
          <div className="sideBody">
            <div className="sideBodyInner" style={{boxShadow: "none"}}>
              <div style={{padding:"1em"}}> 
                {
                  this.props.movies ? 
                  this.props.movies.map((item,index) => (
                    <div key={index} className="title-list">
                      <strong>{item.title}</strong>
                      <p>{item.body}</p>
                    </div>
                  ))
                  : null
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    movies: state.movies
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({moviesList},dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
