import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Bookmarks from './bookmarks/Bookmarks';
import Comments from './comments/Comments';
import Recomended from './recomended/Recomended';
import Responce from './responces/Responce';
import Views from './views/Views';

class App extends React.Component {
  render() {
    let par = {
      bookmarks: 'Bookmarks',
      comments: 'Comments',
      recomended: 'Recomended',
      responce: 'Responce',
      views: 'Views'
    }
    return (
      <Router>
        <div className="container">
          <h1>Analitics</h1>
          <hr />
          <div className='d-flex justify-content-beetwen'>
            <nav>
              <ul>{Object.keys(par).map(elem => <li> <a href={elem}>{par[elem]} </a></li>)}</ul>
            </nav>
            <Switch>
              <Route exact path='/bookmarks' component={Bookmarks} />
              <Route exact path='/comments' component={Comments} />
              <Route exact path='/recomended' component={Recomended} />
              <Route exact path='/responce' component={Responce} />
              <Route exact path='/views' component={Views} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
