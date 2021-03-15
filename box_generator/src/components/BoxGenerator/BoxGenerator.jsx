import React, { useState } from "react";
import styles from "./BoxGenerator.module.css";

const BoxGenerator = (props) => {
	const [color, setColor] = useState("");
	const [size, setSize] = useState("");
	const [boxes, setBoxes] = useState([]);
	const addBox = (c = "white", s = "100") => {
		const divStyle = {
			backgroundColor: c,
			width: s + "px",
			height: s + "px",
		};
		setBoxes([...boxes, divStyle]);
	};
	const handleAdd = (e) => {
		e.preventDefault();
		addBox(color, size);
		setColor("");
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
				{boxes.map((divStyle, index) => (
					<div key={index} style={divStyle} />
				))}
			</div>
		</main>
	);
};

export default BoxGenerator;
