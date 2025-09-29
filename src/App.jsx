import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
	const envArray = Object.entries(import.meta.env).filter(([key]) => key.startsWith("VITE_"));

	const [text, setText] = useState("");
	console.log(envArray);

	return (
		<>
			<h1>Teste de variaveis</h1>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					border: "1px solid gray",
					backgroundColor: "#ffffff21",
					borderRadius: "8px",
				}}
			>
				{envArray.map(([key, value]) => (
					<p>
						{key}: {value}
					</p>
				))}
			</div>
		</>
	);
}

export default App;
