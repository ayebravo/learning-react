const Greeting = (props) => {
	return (
		<>
			<h2>Hello {props.name}</h2>
			<h3>
				{props.name}'s favorite number is {props.favoriteNumber}
			</h3>
			<h3>
				{props.name}'s favorite number plus 10 is{" "}
				{props.favoriteNumber + 10}
			</h3>
			<h3>{props.name}'s favorite colors are:</h3>
			<ul>
				{props.favoriteColors &&
					props.favoriteColors.map((color, index) => (
						<li key={index}>{color}</li>
					))}
				{!props.favoriteColors && <li>None</li>}
			</ul>
		</>
	);
};

export default Greeting;
