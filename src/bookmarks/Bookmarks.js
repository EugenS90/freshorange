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
        <h3>There are your bookmarks</h3>
        <div className='all__cards'>
          <div className='card'>
            <h4>BazaIT</h4>
            <img src={logo} />
            <p>JS developer</p>
            <button className='btn btn-warning' onClick={this.ignore}>Delete</button>
          </div>
          <div className='card'>
            <h4>BazaIT</h4>
            <img src={logo} />
            <p>JS developer</p>
            <button className='btn btn-warning' onClick={this.ignore}>Delete</button>
          </div>
          <div className='card'>
            <h4>BazaIT</h4>
            <img src={logo} />
            <p>JS developer</p>
            <button className='btn btn-warning' onClick={this.ignore}>Delete</button>
          </div>
          <div className='card'>
            <h4>BazaIT</h4>
            <img src={logo} />
            <p>JS developer</p>
            <button className='btn btn-warning' onClick={this.ignore}>Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Bookmarks;
