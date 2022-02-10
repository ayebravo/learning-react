import logo from "./logo.svg";
import "./App.css";
import Greeting from "./Greeting";

const App = () => {
	return (
		// <></> React fragment -> To serve a single parent element that doesn't render anything
		<>
			<h1>Hello</h1>
			<h1>React!</h1>
			<Greeting />
			<Greeting />
		</>
	);
};

export default App;
