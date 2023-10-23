import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/index.css";
import CreateState from "@/Context/CreateState";
import CreateWishList from "@/Context/CreateWishList";
import CreateHistory from "@/Context/CreateHistory";

export default function App({ Component, pageProps }) {
  return (
    <CreateHistory>
      <CreateWishList>
        <CreateState>
          <Component {...pageProps} />
        </CreateState>
      </CreateWishList>
    </CreateHistory>
  );
}
