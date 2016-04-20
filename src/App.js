import React, { Component } from 'react';
import './SCSS/main.scss';
import DatePick from './containers/DatePick'
console.log('this')

export default class App extends Component {
  render() {
    return (<div>
      <DatePick />
      <h1>Hello, world!!!.
      </h1>
		<img src='./public/pic.png' alt='' />
		<form action="demo_form.asp">
  <input type="checkbox" name="vehicle" value="Bike" /> I have a bike<br />
  <input type="checkbox" name="vehicle" value="Car" defaultChecked='true' /> I have a car<br/>
  <input type="submit" value="Submit"/>
</form>
</div>
    );
  }
}
