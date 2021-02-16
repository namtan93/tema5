import React from 'react';
import GlobalStyle from './components/GlobalStyle';

import HomeContainer from './containers/HomeContainer';
import ContactContainer from './containers/ContactContainer';
import BlogPostContainer from './containers/BlogPost';
import BlogListsContainer from './containers/BlogLists';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route exact path="/contact" component={ContactContainer} />
          <Route exact path="/blogs/:slug" component={BlogPostContainer} />
          <Route exact path="/blogs" component={BlogListsContainer} />
        </Switch>
      </Router>
    </>
  )
};

export default App;