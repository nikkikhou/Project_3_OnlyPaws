import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Auth from './utils/auth';

/// ADDED BULMA /// 
import 'bulma/css/bulma.min.css';


/// IMPORT PAGES ///
import Landing from './pages/Landing';
import Signup from './pages/Signup';
import Login from './pages/Login';
// import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import CreateProfileForm from './pages//createProfile';

/// IMPORT COMPONENTS ///
import ProtectRoute from './components/ProtectRoute';

import './App.css';
import SinglePost from './pages/SinglePost';

const httpLink = createHttpLink({
  uri: '/graphql',
});

/// SET CONTEXT ///
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

/// SET UP CLIENT ///
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route
            path='/createprofile'
            element={Auth.loggedIn() ? <CreateProfileForm /> : <ProtectRoute />}
          />
          <Route path='/profile' element={<Profile />} />
          <Route path='/Dashboard' element={<Profile />} />

          <Route 
                path="/posts/:postId" 
                element={<SinglePost />}
              />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
