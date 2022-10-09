import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DefaultLayout from "components/layouts/default";

function MyApp({ Component, pageProps }) {
  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  );
}

export default MyApp;
