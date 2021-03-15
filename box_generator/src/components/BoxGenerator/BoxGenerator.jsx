import React, { useState } from "react";
import styles from "./BoxGenerator.module.css";

const BoxGenerator = (props) => {
	const [color, setColor] = useState("");
	const [size, setSize] = useState("");
	const [boxes, setBoxes] = useState([]);
	const addBox = (c = "white", s = "100") => {
		let err = "";
		if (c.length < 3) err = "Please enter a valid color\n";
		if (s === "") s = "100";
		else if (s < 11) err += "Size should be bigger than 10";
		if (err !== "") {
			alert(err);
			return c;
		} else {
			const style = {
				backgroundColor: c,
				width: s + "px",
				height: s + "px",
			};
			setBoxes([...boxes, style]);
			return "";
		}
	};
	const handleAdd = (e) => {
		e.preventDefault();
		setColor(addBox(color, size));
	};
	return (
		<main className={styles.BoxGenerator}>
			<div className={styles.BoxGenForm}>
				<form onSubmit={handleAdd}>
					<label>
						Color:{" "}
						<input
							type='text'
							name='color'
							value={color}
							onChange={(e) => setColor(e.target.value)}
						/>
						<input
							type='color'
							name='colorPicker'
							onChange={(e) => setColor(e.target.value)}
						/>
					</label>
					<label>
						Size:{" "}
						<input
							type='text'
							name='size'
							value={size}
							onChange={(e) => setSize(e.target.value)}
						/>
					</label>
					<button type='submit'>Add</button>
				</form>
			</div>
			<div className={styles.container}>
				{boxes.map((boxStyle, index) => (
					<div key={index} style={boxStyle} />
				))}
			</div>
		</main>
	);
};

export default BoxGenerator;
