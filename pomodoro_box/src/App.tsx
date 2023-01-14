import React from 'react';
import { Layout } from "./shared/Layout";
import "./main.global.css"
import { Header } from "./shared/Header";
import { Content } from "./shared/Content";
import { PomodoroPage } from "./shared/PomodoroPage";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./store/reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DeleteModal } from "./shared/DeleteModal";
import { StatisticPage } from "./shared/StatisticPage";
import { ErrorMessage } from "./shared/ErrorMessage";

const store = createStore(rootReducer, composeWithDevTools(
	applyMiddleware(thunk)
))

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Layout>
					<Header />
					<Content>
						<Routes>
							<Route path="/" element={<PomodoroPage />} />
							<Route path="/statistics/week/:weekURI/day/:dayURI" element={<StatisticPage />} />
							<Route path="/delete/:id" element={<DeleteModal />} />
							<Route path="*" element={<ErrorMessage errorMessage={"404 — страница не найдена"} />} />
						</Routes>
					</Content>
				</Layout>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
