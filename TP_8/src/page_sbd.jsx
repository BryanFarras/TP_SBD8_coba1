import SBDLogo from './assets/SBDLogo.svg'

export default function AppSBD() {
  return (
    <div className="App min-h-screen flex flex-col items-center justify-center w-full px-8 space-y-44 pt-40">

            {/* Bagian SBD ============================*/}
            <div id="SBD" className="flex flex-row items-start gap-8 max-w-6xl">
              <img src={SBDLogo} alt="SBDLogo" className="w-64 h-auto object-contain" />

              <div className="flex flex-col space-y-6">
                <h1 className="text-3xl font-bold flex items-center gap-2">
                  <span className="text-white">Praktikum</span>
                  <span className="rounded-xl p-[2px] bg-gradient-to-r from-color_sbd1 to-color_sbd2">
                    <span className="bg-custom_bg1 p-[6px] rounded-xl block">
                      <span className="text-transparent bg-clip-text bg-gradient-to-b from-color_sbd1 to-color_sbd2">
                        Sistem Basis Data
                      </span>
                    </span>
                  </span>
                </h1>

                <p className="text-justify leading-relaxed font-inter text-xs max-w-2xl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>
        </div>
  )
}
