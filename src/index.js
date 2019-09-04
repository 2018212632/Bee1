import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class HomePage extends React.Component {
    constructor(props){
      super(props);
      this.state={
        item:[
        ]
      }
    }
    
    render(){
      return(
          <header>
              <div id="back"></div>
              <div id="title"><h1>美团外卖</h1></div>
              <div id="set"></div>
          </header>
     );
    }
  }
  
ReactDOM.render(
    <HomePage />,
    document.getElementById('root')
  );
  
