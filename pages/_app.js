import * as React from "react";
import "../styles/globals.css";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import Layout from "../components/Layout";
import { Provider } from "react-redux";
import { store } from "../store";
import firebaseApp from "../backend/api/firebase";

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
          />
        </Provider>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
