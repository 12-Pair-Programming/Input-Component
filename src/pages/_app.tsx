import "../styles/globals.css";
import type { AppProps } from "../../../Input-Component/node_modules/next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
