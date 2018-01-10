// Any JS in here is automatically ran for us
// console.log('hello');

// Import the React library
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ImageList from './components/image_list';

// Create a component
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { images: [] };
  }

  componentWillMount() {
    // Fantastic place to load data!
    // componentWillMount will only be called one time for this component
    // console.log('App is about to render');
    axios
      .get('https://api.imgur.com/3/gallery/hot/viral/0')
      .then(response => this.setState({ images: response.data.data }));
    // NEVER DO THIS - this.state.images = [{},{},{}];
    // ALWAYS USE 'setState' to update state
  }

  render() {
    // console.log(this.state.images);

    return (
      <div>
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

// Render this component to the screen
// Wait for the DOM to build and Meteor to startup and then try rendering something to the DOM
Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('.container'));
});
