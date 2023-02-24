import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./components/Home/Home";
import Quiz from "./components/Quiz";

function App() {
	
return (
	<> 
	<BrowserRouter>
	<Routes>
		<Route exact path="/" element={<Home/>}/>
		<Route exact path="/Quiz" element={<Quiz/>}/>
	</Routes>
	</BrowserRouter>
	</>
);
}

export default App;
