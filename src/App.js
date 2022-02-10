// import logo from "./logo.svg";
import "./App.css";
import Greeting from "./Greeting";

const App = () => {
	// CSS in JS -> Styling React components
	// This can be good to have dynamic styling
	const styles = {
		container: {
			padding: 30,
			backgroundColor:
				new Date().getSeconds() % 2 === 0 ? "lightblue" : "pink",
			heading: {
				textTransform: "uppercase",
			},
		},
	};

	return (
		// <></> React fragment -> To serve a single parent element that doesn't render anything
		<div style={styles.container}>
			<h1 style={styles.container.heading}>Hello React!</h1>
			<hr></hr>
			<Greeting
				name="Larry"
				favoriteNumber={1}
				favoriteColors={["Red", "Green", "Blue", "Red"]}
			/>
			<Greeting name="Sam" favoriteNumber={42} />
		</div>
	);
};

export default App;
