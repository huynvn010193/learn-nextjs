import { EmptyLayout } from "@/components/layout";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import { AppPropsWithLayout } from "../models";

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout ?? EmptyLayout;
  return (
    <Layout>
      <Component {...pageProps} />;
    </Layout>
  );
}
export default MyApp;
