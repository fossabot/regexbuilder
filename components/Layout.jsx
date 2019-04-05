// const DefaultLayout = React.createClass({
//   propTypes: {
//     title: React.PropTypes.string
//   },
//   render() {
//     return (
//       <div>
//         <div className="l-header">
//           <h1>Company Name</h1>
//           <Navigation />
//         </div>
//         <div className="l-content">
//           <h1>{this.props.title}</h1>
//           {this.props.children}
//         </div>
//         <div className="l-footer">
//           <p>Copyright (c) 2014 Company Name</p>
//         </div>
//       </div>
//     );
//   },
//   componentDidMount() {
//     if (ExecutionEnvironment.canUseDOM) {
//       document.title = this.props.title;
//     }
//   }
// });

import React from "react";

function Layout() {
  return (
    <div>
      <div className="l-header">
        <h1>Company Name</h1>
      </div>
      <div className="l-content">
        <h1>NICE</h1>
      </div>
      <div className="l-footer">
        <p>Copyright (c) 2014 Company Name</p>
      </div>
    </div>
  );
}

export default Layout;
