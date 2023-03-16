import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import Layout from "../components/Layout/Layout";
import { StyledEngineProvider } from "@mui/material/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "../styles/globals.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect } from "react";
import store from "../rtk/store/store";
import { Provider } from "react-redux";

import { AppProps } from 'next/app';
//custom console
const customConsole = (() => {
  const nativeConsole = console;
  const noop = () => {};

  const customConsole = {
    assert: noop,
    clear: noop,
    count: noop,
    debug: noop,
    dir: noop,
    dirxml: noop,
    error: noop,
    group: noop,
    groupCollapsed: noop,
    groupEnd: noop,
    info: noop,
    log: noop,
    markTimeline: noop,
    memory: noop,
    profile: noop,
    profileEnd: noop,
    table: noop,
    time: noop,
    timeEnd: noop,
    timeStamp: noop,
    timeline: noop,
    timelineEnd: noop,
    trace: noop,
    warn: noop,
  };

  return customConsole;
})();


function MyApp({ Component, pageProps, router }) {
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   console = customConsole;
  // }, []);
  useEffect(() => {
    setLoading(false);
  }, []);

  NProgress.configure({ showSpinner: false });
  Router.events.on("routeChangeStart", () => {
    NProgress.start();
  });
  Router.events.on("routeChangeComplete", () => {
    NProgress.done();
  });

  const theme = createTheme({
    typography: {
      fontFamily: "Open Sans, sans-serif",
    },
    palette: {
      primary: {
        main: "#5B177B",
      },
      secondary: {
        main: "#371B5C",
      },
      error: {
        main: "#ff0000", // set the error color to red
      },
    },
    // add other theme properties as needed
  });

  return (
    <>
      <StyledEngineProvider injectFirst>
        {!loading && (
          <Provider store={store}>
            <Layout>
              <>
                <ThemeProvider theme={theme}>
                  <CssBaseline />
                  <Component {...pageProps} />
                </ThemeProvider>
                <ToastContainer
                  autoClose={3500}
                  hideProgressBar={true}
                  closeOnClick
                  pauseOnHover
                  draggable={true}
                  position="top-right"
                  toastClassName=""
                  bodyClassName=""
                  progressClassName=""
                  pauseOnFocusLoss={true}
                  newestOnTop={true}
                  theme="colored"
                />
              </>
            </Layout>
          </Provider>
        )}
      </StyledEngineProvider>
    </>
  );
}
export default MyApp;
