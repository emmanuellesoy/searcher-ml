import React from 'react';
import Searcher from './components/Searcher/Searcher';
import { styled } from '@mui/system';
import Result from './components/Results/Results';
import './App.css'

const Main = styled('main')({
  background: '#eeeeee',
  height: '100vh'
});

const App = ({search = ''}) => {
  return(
    <Main >
      <Searcher/>
      <Result/>
    </Main>
  );
};

export default App;
