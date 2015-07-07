// LIBRARY
/*eslint-disable no-unused-vars*/
import React from 'react';
/*eslint-enable no-unused-vars*/
import {Route, DefaultRoute, NotFoundRoute} from 'react-router';

// COMPONENT
import Application from './components/App/App';
import HomeSection from './components/HomeSection/HomeSection';
import NotFoundSection from './components/NotFoundSection/NotFoundSection';
import PostItem from './components/Post/PostItem';

export default (
  <Route name='app' path='/' handler={Application}>
    <Route name='home' path='/home' handler={HomeSection}/>
    <Route name='post' path="/post/:postId" handler={PostItem}/>
    <DefaultRoute handler={HomeSection} />
    <NotFoundRoute handler={NotFoundSection} />
  </Route>
);
