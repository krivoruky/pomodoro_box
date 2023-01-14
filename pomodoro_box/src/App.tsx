import React from 'react';
import { Layout } from "./shared/Layout";
import "./main.global.css"
import { Header } from "./shared/Header";
import { Content } from "./shared/Content";
import { PomodoroPage } from "./shared/PomodoroPage";

function App() {
	return (
		<Layout>
			<Header />
			<Content>
				<PomodoroPage />
			</Content>
		</Layout>
	);
}

export default App;