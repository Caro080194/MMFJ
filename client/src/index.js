import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyles from "./GlobalStyles";
import LoggedInUserProvider from "./components/login/LoggedInUserContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
  <GlobalStyles/>
  <LoggedInUserProvider>
  <App/>
  </LoggedInUserProvider>
  </>
);