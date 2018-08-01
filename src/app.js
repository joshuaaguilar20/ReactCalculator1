import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css/normalize.css'
import './styles/styles.scss'


class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: 'Please write an essay about your favorite DOM element.',
        newValue:'some new value'
      };
      this.words ='';
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
       this.setState({value: event.target.value});
       this.words = this.state.value;
       console.log(typeof this.words);
       console.log(this.words);
    }
  
    handleSubmit(event) {
      this.setState({newValue:this.renderValue});
     event.preventDefault();
  
    callBackFunction = (match,group1,group2) => {
      console.log(`group 1 ${group1}`);
      console.log(`group 2 ${group2}`);
 };
 let regInput =/\w+/g
 var regex = this.words.replace(regInput, this.callBackFunction);
};
  
    render() {
      return (
        <div>
        <h1>Word Thingy</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Insert Text Here 
            <textarea value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <p className='word-wrap'>{this.state.newValue}</p>
        </div>
      );
    }
  }
  ReactDOM.render(<App/>, document.getElementById('app'));
  
