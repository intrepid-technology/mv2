import "../styles/globals.css";

import * as React from "react";

import { Hydrate, QueryClient, QueryClientProvider } from "react-query";

import Layout from "../components/Layout";
import { OverlayProvider } from "@react-aria/overlays";
import PageBreadcrumbs from "components/PageBreadcrumbs";
import PageScrollNavigations from "components/PageScrollNavigations";
import PageTabNavigations from "components/PageTabNavigations";
import { Provider } from "react-redux";
import firebaseApp from "../backend/api/firebase";
import { store } from "../store";
import { usePageLayoutProps } from "hooks/useLayoutTabNavigations";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const isAuth = true;
  const router = useRouter()
  const [queryClient] = React.useState(() => new QueryClient());
  const pageLayoutProps = usePageLayoutProps()

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Provider store={store}>
        <OverlayProvider>
          <Layout
            navbar={{
              auth: isAuth,
            }}
            main={<Component {...pageProps} />}
            tabNavigationWrapper={
              <PageTabNavigations navLinks={pageLayoutProps.tabs} />
            }
            breadcrumbsWrapper={<PageBreadcrumbs />}
            scrollNavigationWrapper={<PageScrollNavigations />}
            pageHeading={pageLayoutProps?.heading}
            pageSubHeading={pageLayoutProps?.subHeading}
            pageDescription={pageLayoutProps?.description}
            headerDisplayWrapper={{
              wrapChildren: (children) => Boolean(pageLayoutProps?.heading) ? children : null
            }}
            navBackButton={{
              onClick: () => {
                router.back()
              }
            }}
          />
        </OverlayProvider>
        </Provider>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
