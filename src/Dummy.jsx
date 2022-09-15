// import React from "react";

// export const Dummy = (props) => {
//   return (
//     <div>
//       <h3>Hello ,{props.person}</h3>
//     </div>
//   );
// };

// import React, { Component } from "react";

// export default class Dummy extends Component {
//   render(props) {
//     return <div>Hello,{this.props.person}</div>;
//   }
// }

// import React from "react";

// export default function Dummy(props) {
//   return (
//     <div>
//       <img src={props.src} height="100" alt={props.alt} />
//     </div>
//   );
// }

// import React, { Component } from "react";
// import { PureComponent } from "react";

// export default class Dummy extends Component {
//   constructor() {
//     super();
//     this.state = { data: 10 };
//   }
//   render() {
//     console.log(this.state);
//     return (
//       <div>
//         <h1>Pure Component{this.state.data}</h1>
//         <button
//           onClick={() => {
//             this.setState({ data: 20 });
//           }}
//         >
//           Update
//         </button>
//       </div>
//     );
//   }
// }
// import React from "react";

// export const Dummy = () => {
//   return <div>Dummy</div>;
// };

// state

// import React, { Component } from "react";

// export default class Dummy extends Component {
//   constructor() {
//     super();
//     this.state = { brand: "ford" };
//   }
//   render() {
//     return (
//       <div>
//         <h1>Car Company {this.state.brand}, </h1>
//         <button
//           onClick={() => {
//             this.setState({ brand: "hundai" });
//           }}
//         >
//           Update
//         </button>
//       </div>
//     );
//   }
// }

// import React, { useState } from "react";

// export default function Dummy() {
//   const [update, setUpdate] = useState("100");
//   const updateHandler = () => {
//     setUpdate(20);
//   };
//   return (
//     <div>
//       <h1>{update}</h1>
//       <button onClick={updateHandler}>Update</button>
//     </div>
//   );
// }

// lifecycle Method
import React, { Component } from "react";

export default class Dummy extends Component {
  constructor(props) {
    super(props);
    this.state = { favColor: "red" };
  }
  static getDerivedStateFromProps(props, state) {
    return { favColor: props.favColor };
  }

  //   componentDidMount() {
  //     setTimeout(() => {
  //       this.setState({ favColor: this.props.favColor });
  //     }, 2000);
  //   }

  changeColor = () => {
    this.state({ favColor: "blue" });
  };

  render() {
    return (
      <div>
        <h1>Favorite color is {this.state.favColor}</h1>
      </div>
    );
  }
}
