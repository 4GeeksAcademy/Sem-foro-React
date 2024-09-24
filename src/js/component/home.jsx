import React, { useState } from "react";


//create your first component
const TrafficLight = () => {
	const [color, setColor] = useState('')
	return (
		<div className="traffic-light-container">
			<div className="traffic-light-pole"></div>
			<div className="traffic-light">
				<div
					className={`light red ${color === "red" ? "selected" : ""}`}
					onClick={() => setColor("red")}
				></div>
				<div
					className={`light yellow ${color === "yellow" ? "selected" : ""}`}
					onClick={() => setColor("yellow")}
				></div>
				<div
					className={`light green ${color === "green" ? "selected" : ""}`}
					onClick={() => setColor("green")}
				></div>
			</div>
		</div>
	);
};

export default TrafficLight;
