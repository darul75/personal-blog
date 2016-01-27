// LIBRARY
/*eslint-disable no-unused-vars*/
import React from 'react';
/*eslint-enable no-unused-vars*/
import {Route, IndexRoute} from 'react-router';

// COMPONENT
import Application from './components/App/App';
import HomeSection from './components/HomeSection/HomeSection';
import NotFoundSection from './components/NotFoundSection/NotFoundSection';
import PostItem from './components/Post/PostItem';

export default (
  <Route component={Application} path='/'>
    <IndexRoute component={HomeSection} />
    <Route component={PostItem} path='/post/:postId' />
    <Route component={NotFoundSection} path='*' />
  </Route>
);
