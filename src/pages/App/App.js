import { Provider } from 'react-redux';
import { colors } from 'common/enums';
import { JobList } from 'pages';
import { store } from 'store';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styled'

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={{ colors }}>
        <JobList />
        <GlobalStyle />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
