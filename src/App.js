// import logo from "./logo.svg";
import "./App.css";
import Greeting from "./Greeting";

const App = () => {
	return (
		// <></> React fragment -> To serve a single parent element that doesn't render anything
		<>
			<h1>Hello React!</h1>
			<hr></hr>
			<Greeting
				name="Larry"
				favoriteNumber={1}
				favoriteColors={["Red", "Green", "Blue"]}
			/>
			<Greeting name="Sam" favoriteNumber={42} />
		</>
	);
};

export default App;
