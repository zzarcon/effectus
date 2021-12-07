import * as React from 'react';
import {GHCorner} from 'react-gh-corner';
import {AppWrapper, GlobalStyles} from './styled';

const App = () => {
  return (
    <AppWrapper>
      <GlobalStyles />
      <GHCorner openInNewTab href="https://github.com/effectus" />
    </AppWrapper>
  )
}

export default App