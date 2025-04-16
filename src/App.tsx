import './App.css'
import Feature from "./components/feature"
import ParallaxImage from './components/ParallaxImage';

import { FaFeatherAlt, FaUser, FaGithub, FaQuestion, FaWindows } from 'react-icons/fa';
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoImage } from "react-icons/io5";

function App() {
  return (
    <>
    {/* <div className="font-montserrat max-w-screen overflow-x-hidden bg-amber-300"> 
      <h1 className="font-bold px-2 text-4xl tracking-tighter text-balance max-lg:font-medium max-sm:px-4 sm:text-5xl lg:text-6xl xl:text-8xl">Bloxlaunch</h1>
    </div> */}
    {/* <nav className='fixed inset-x-0 top-0 z-10 border-b border-black/5 dark:border-white/10 backdrop-blur-sm h-10'>sadsad</nav> */}
    <div className="absolute top-0 left-0 w-full h-[400px] -z-10 bg-gradient-image bg-cover bg-center bg-no-repeat hue-rotate-180 saturate-200 sm:h-[400px] md:h-[600px] lg:h-[800px]" />
    <div className="container flex mx-auto p-5 items-center flex-col">
      <img className='pt-15' src="/Bloxlaunch-Logo.svg" alt="Bloxlaunch Logo" />
      <h1 className="font-medium px-2 text-4xl">The Faster Roblox Launcher</h1>
      <p>Play your favourite Roblox games instantly</p>
      <a className="relative mt-5 grid grid-flow-col gap-4 rounded-lg bg-gradient-to-r from-amber-400 to-amber-300 px-4 py-2" href="https://google.com">
        <div className='content-center'><FaWindows/></div>
        <div className='text-left font-semibold'>
          <p>Download latest version</p>
          <p>Version 0.1.0 • 3 MB</p>
        </div>
      </a>
      
      <ParallaxImage className='w-[900px] pt-8' src="/showcase.avif" alt="Showcase" />
      <div className='mt-12 grid grid-cols-1 xl:grid-cols-4 md:grid-cols-2 gap-4'>
      <Feature title="Lightweight" description="The app is 4mb" icon={FaFeatherAlt}/>
      <Feature title="Open-source" description="placeholder
      " icon={FaGithub}/>
      <Feature title="Search" description="Search any roblox game" icon={FaMagnifyingGlass}/>
      <Feature title="Account Free" description="No need to login" icon={FaUser}/>
      <Feature title="Compatible" description="Compatible with Bloxstrap, Fishstrap" icon={IoImage}/>
      <Feature title="Private Server" description="Quick access to yours and others private servers" icon={FaQuestion}/>
      </div>

    </div>

    </>
  )
}

export default App
