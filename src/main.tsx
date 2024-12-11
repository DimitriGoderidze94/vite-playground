import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import AppRouter from './Router';
import { Provider } from 'react-redux';
import { store } from './state/store';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache()
})

// https://rickandmortyapi.com/graphql

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <ApolloProvider client={client}>
      <AppRouter />
      </ApolloProvider>
    </Provider>
  </StrictMode>,
)
