import React from "react";
import ReactDOM from "react-dom";
import Layout from "./components/Layout";

// class Layout extends React.Component {
//   constructor() {
//     super();
//     this.name = "testName";
//   }
//   render() {
//     return (
//       <div>
//         <h1>Welcome!!</h1>
//         <h1>{((num) => { return 1 + num; })(4)}</h1>
//         <h1>{this.name}!</h1>
//       </div>
//     );
//   }

//   getParam(num) {
//     return 1 + num;
//   };
// }

const app = document.getElementById('app');
ReactDOM.render(<Layout/>, app);
