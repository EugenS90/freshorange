import React from 'react';
import './Bookmarks.css';
import logo from './logo.svg'

class Bookmarks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div>
        <p>Bookmarks</p>
        <div className='card'>
          <p>BazaIT</p>
          <img src={logo} />
          <p>JS developer</p>
        </div>
      </div>
    );
  }
}

export default Bookmarks;
