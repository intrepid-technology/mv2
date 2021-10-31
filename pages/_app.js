import "../styles/globals.css";

import Layout from "../components/Layout";
import { Provider } from "react-redux";
import { store } from "../store";

function MyApp({ Component, pageProps }) {
  const isAuth = true;

  return (
    <Provider store={store}>
      <Layout
        navbar={{
          auth: isAuth,
        }}
        main={<Component {...pageProps} />}
      />
    </Provider>
  );
}

export default MyApp;
