import React from 'react';
import { Provider } from 'react-redux';
import { colors } from 'common/enums';
import { JobList } from 'pages';
import { store } from 'store';
import { ThemeProvider } from 'styled-components';


const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={{ colors }}>
        <JobList />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
