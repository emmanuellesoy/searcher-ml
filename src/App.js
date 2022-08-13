import React from 'react';
import Searcher from './components/Searcher/Searcher';
import { styled } from '@mui/system';

const Main = styled('main')({
  background: '#eeeeee'
});

const App = ({search = ''}) => {
  return(
    <Main >
      <Searcher/>
      <div>{search}</div>
    </Main>
  );
};

export default App;
