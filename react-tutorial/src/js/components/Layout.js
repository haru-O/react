import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {title: "Welcome"};
  }
  changeaTitle = (title) => {
    this.setState({title});
  };
  render() {
    return (
      <div>
        <Header changeTitle={this.changeaTitle} title={this.state.title}/>
        <Footer />
      </div>
    );
  }
}