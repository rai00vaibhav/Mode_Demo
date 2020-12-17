import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getList} from './actions';
import {bindActionCreators} from 'redux';
import Header from './components/Header';
import styles from './App.css';
import Button from '@material-ui/core/Button';
class App extends Component {

  componentDidMount() {
    this.props.getList();
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
            <Button variant="contained" color="primary">
              Hello World
            </Button>
              <div style={{padding:"1em"}}> 
                {
                  this.props.list ? 
                  this.props.list.map((item,index) => (
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
    list: state.list
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({getList},dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
