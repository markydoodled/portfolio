import React, { useEffect, useState } from 'react'
import Intro from './components/Intro'
import Portfolio from './components/Portfolio'
import Timeline from './components/Timeline'
import Contact from './components/Contact'
import Footer from './components/Footer'
function App() {
	//Read Current Theme
	const [theme, setTheme] = useState(null);

	useEffect(() => {
		if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
			setTheme("dark");
		} else {
			setTheme("light");
		}
	}, []);

	//Switch Between Themes
	const handleThemeSwitch = () => {
		setTheme(theme === "dark" ? "light" : "dark");
	};

	useEffect(() => {
		if (theme === "dark") {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, [theme]);

	const sun = (
		//Set Light Mode Sun Glyph
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
			<path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
		</svg>
	);

	const moon = (
		//Set Dark Mode Moon Glyph
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
			<path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
		</svg>
	);

  return (
  <>
    <div className="flex justify-between items-center bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-300 p-4">
      {/*Logo on the left*/}
      <img src="/vite.svg" alt="Logo" className="h-16 w-16 p-4" />

      {/*Button For Changing Theme on the right*/}
      <button type="button" onClick={handleThemeSwitch} className="p-2 z-10 bg-gradient-to-r from-orange-400 to-purple-400 text-lg p-1 rounded-md drop-shadow-md">
        {theme === "dark" ? sun : moon}
      </button>
    </div>

    <div className="bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-300 min-h-screen font-inter">
      {/*Displaying Each Component Section*/}
      <div className="max-w-5xl w-11/12 mx-auto">
        <Intro></Intro>
        <Portfolio></Portfolio>
        <Timeline></Timeline>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    </div>
  </>
)
}

export default App
