import React from 'react';

class Rooms extends React.Component {

  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  render() {
    return (
      <div className="App-Rooms" ref={this.myRef}>
      <p>Room 'Arizona' is our cozy nest, has a large bathroom and a private patio where you can enjoy your meals under the warm south Italian sun.</p>
      </div>
    );
  }
}

export default Rooms;
