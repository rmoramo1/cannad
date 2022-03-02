import { BrowserRouter, Route, Switch } from "react-router-dom";
import injectContext from "./store/appContext";

/* pages*/
import { Home } from "./pages/home";
import { About } from "./pages/about";
import { Benefits } from "./pages/benefits";
import { Error } from "./pages/404";
import { Construction } from "./pages/construction";
import { Contact } from "./pages/contact";
import { Partners } from "./pages/partners";

/*components*/
import { Header }from "./components/header"
import { Footer }from "./components/footer"

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Header/>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/home">
						<Home />
					</Route>
					<Route exact path="/about-us">
						<About />
					</Route>
					<Route exact path="/benefits">
						<Benefits />
					</Route>
					<Route exact path="/partners">
						<Partners />
					</Route>
					<Route exact path="/construction">
						<Construction/>
					</Route>
					<Route exact path="/contact">
						<Contact/>
					</Route>
					<Route>
						<Error/>
					</Route>
				</Switch>
				<Footer/>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(App);
