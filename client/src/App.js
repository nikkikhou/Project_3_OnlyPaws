import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/// ADDED BULMA /// 
import 'bulma/css/bulma.min.css';
import './App.css';



/// IMPORT PAGES ///
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
// import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import CreateProfileForm from './pages//createProfile';
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
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/createprofile' element={<CreateProfileForm />} />
          <Route path='/me' element={<Profile />} />
          <Route path="/posts/:postId"  element={<SinglePost />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
