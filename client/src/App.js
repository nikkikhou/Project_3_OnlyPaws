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
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';

/// IMPORT COMPONENTS ///
import ProtectRoute from './components/ProtectRoute';

import './App.css';

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
/// FETCHING API ///
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9dfb8afc12mshebf3293356f7965p1650ffjsn900cebbd394a',
		'X-RapidAPI-Host': 'dog-breeds2.p.rapidapi.com'
	}
};

fetch('https://dog-breeds2.p.rapidapi.com/dog_breeds', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

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
            path='dashboard/:userId'
            element={Auth.loggedIn() ? <Dashboard /> : <ProtectRoute />}
          />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
