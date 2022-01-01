import "style/bootstrap.css";
import "style/style.css";

import type { AppProps } from "next/app";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};
export default MyApp;
