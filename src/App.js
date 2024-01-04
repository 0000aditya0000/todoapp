import React from "react";
import Todos from "./Todos";
import { createContext, useState } from "react";
import ReactSwitch from 'react-switch';

export const ThemeContext = createContext(null);	

function App(){
	const [theme, setTheme] = useState("light");
	const toggleTheme = () =>{
		setTheme((curr)=>(curr==="light"? "dark" : "light"));
	}
	return(
		<ThemeContext.Provider value={{theme,toggleTheme}}>
		<div className="App" id={theme}>
		<div className='switch'>
			<h1>Switch Theme</h1>
			<ReactSwitch onChange={toggleTheme} checked={theme==="dark"}/>
			</div>
			<Todos/>
			
		</div>
		</ThemeContext.Provider>
	)
}

export default App;