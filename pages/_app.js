import "../styles/globals.css";

import * as React from "react";

import { Hydrate, QueryClient, QueryClientProvider } from "react-query";

import Layout from "../components/Layout";
import PageTabNavigations from "components/PageTabNavigations";
import { Provider } from "react-redux";
import firebaseApp from "../backend/api/firebase";
import { store } from "../store";

function MyApp({ Component, pageProps }) {
  const isAuth = true;
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Provider store={store}>
          <Layout
            navbar={{
              auth: isAuth,
            }}
            main={<Component {...pageProps} />}
            tabNavigationWrapper={
              <PageTabNavigations navLinks={Component.tabNavigations} />
            }
          />
        </Provider>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
