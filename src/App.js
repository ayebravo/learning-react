import logo from "./logo.svg";
import "./App.css";
import Greeting from "./Greeting";

const App = () => {
	return (
		// <></> React fragment -> To serve a single parent element that doesn't render anything
		<>
			<h1>Hello React!</h1>
			<Greeting name="Larry" />
			<Greeting name="Sam" />
		</>
	);
};

export default App;
