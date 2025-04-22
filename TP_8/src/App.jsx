import NavBar from './NavBar.jsx'
import AppSBD from './page_sbd.jsx'
import AppDMJ from './page_dmj.jsx'
import AppOS from './page_os.jsx'

export default function App() {
  return (
    <div>
      <NavBar />

      <div className="App min-h-screen flex flex-col items-center justify-center w-full px-8 space-y-44 pt-40">

        {/* Home Section =============================*/}
        <div id="home" className="flex flex-col items-center justify-center gap-8 max-w-6xl leading-[1.2] text-center">
          <div className="flex flex-col space-y-5">
          <h1 className="text-5xl font-bold flex items-center justify-center gap-2">
          <span className="bg-gradient-to-r from-color_title1 to-color_title2 text-transparent bg-clip-text animated-gradient-text pb-2">
            Network Laboratory
          </span>

          </h1>

            <p className="leading-relaxed font-inter text-xs max-w-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        
        <AppSBD />
        <AppDMJ />
        <AppOS />

      </div>
    </div>
  )
}
