// { name, favoriteNumber, favoriteColors } is destructuring the props being passed to this component
const Greeting = ({ name, favoriteNumber, favoriteColors }) => {
	return (
		<>
			<h2>Hello {name}</h2>
			<h3>
				{name}'s favorite number is {favoriteNumber}
			</h3>
			<h3>
				{name}'s favorite number plus 10 is {favoriteNumber + 10}
			</h3>
			<h3>{name}'s favorite colors are:</h3>
			<ul>
				{favoriteColors &&
					[...new Set(favoriteColors)].map((color, index) => (
						<li key={index}>{color}</li>
					))}
				{!favoriteColors && <li>None</li>}
			</ul>
		</>
	);
};

export default Greeting;
