import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { Auth0Provider } from './components/auth0-context';
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
	<Auth0Provider>
		<App />
	</Auth0Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
