import './App.css';
import { useEffect, useState } from 'react';
import Feature from "./components/Feature";
// import ParallaxImage from './components/ParallaxImage';

import {FaFeatherAlt, FaUser, FaGithub, FaWindows, FaLock} from 'react-icons/fa';
import { FaMagnifyingGlass } from "react-icons/fa6";
import {IoExtensionPuzzle} from "react-icons/io5";

// // Type for GitHub release asset
// interface GitHubReleaseAsset {
//   name: string;
//   size: number;
//   browser_download_url: string;
// }
//
// // Type for GitHub release response
// interface GitHubRelease {
//   tag_name: string;
//   assets: GitHubReleaseAsset[];
// }

function App() {
  const [latestVersion, setLatestVersion] = useState<string | null>(null);
  const [downloadUrl, setDownloadUrl] = useState<string>("#");
  const [fileSize, setFileSize] = useState<string | null>(null);
  // const [updatedAt, setUpdatedAt] = useState<string | null>(null);

  useEffect(() => {
    async function fetchRelease() {
      try {
        const response = await fetch("https://api.github.com/repos/bloxlaunch/app/releases/latest");
        const data = await response.json();

        const version = data.tag_name;
        // Update the asset filtering logic to match the full name of the asset
        const asset = data.assets[0];

        if (asset) {
          const sizeMB = (asset.size / (1024 * 1024)).toFixed(2);
          setLatestVersion(version);
          setDownloadUrl(asset.browser_download_url);
          setFileSize(sizeMB);
          // setUpdatedAt(asset.published_at)
        }
      } catch (err) {
        console.error("Failed to fetch release info:", err);
      }
    }

    fetchRelease();
  }, []);



  return (
    <>
      <div className="absolute top-0 left-0 w-full h-[400px] -z-10 bg-gradient-image bg-cover bg-center bg-no-repeat hue-rotate-180 saturate-200 sm:h-[400px] md:h-[600px] lg:h-[800px]" />
      <div className="container flex mx-auto p-5 items-center flex-col">
        <img className='pt-15 mb-6 w-[800px] select-none' src="/Bloxlaunch-Logo.svg" alt="Bloxlaunch Logo"/>
        <h1 className="font-semibold px-2 text-4xl select-none">The Faster Roblox Launcher</h1>
        <p className={"text-xl font-normal select-none"}>Play your favourite games instantly</p>

        <a
          className="relative mt-5 grid grid-flow-col gap-4 rounded-lg bg-gradient-to-r from-amber-400 to-amber-300 px-4 py-2"
          href={downloadUrl}
        >
          <div className='content-center'><FaWindows className={"w-6 h-auto"}/></div>
          <div className='text-left font-semibold select-none'>
            <p>Download latest version</p>
            <p className={"text-sm"}>
              {latestVersion ? `${latestVersion}` : "Loading..."}
              {fileSize && ` • ${fileSize} MB`}
            </p>
          </div>
        </a>

        <div className="w-full h-auto flex justify-center pt-10">
          <img
            src="/showcase.avif"
            className="w-[900px] z-10 border-1 border-white/10 rounded-lg backdrop-blur-md"
           alt={""}/>
        </div>

        {/*<div className="w-full h-[450px] mt-[-150px] md:h-[700px] lg:h-[800px]">*/}
        {/*  <ParallaxImage*/}
        {/*    src="/searchShowcase.avif"*/}
        {/*    offsetPos={-0.30}*/}
        {/*    style={{bottom: '-200px', right: '75px'}}*/}
        {/*    className="w-[350px] z-30 border-1 border-white/10 rounded-lg backdrop-blur-md opacity-0 lg:opacity-100"*/}
        {/*  />*/}
        {/*  <ParallaxImage*/}
        {/*    src="/privateServerShowcase.avif"*/}
        {/*    offsetPos={-0.35}*/}
        {/*    style={{top: '700px', left: '130px'}}*/}
        {/*    className="w-[280px] z-20 border-1 border-white/10 rounded-lg backdrop-blur-md opacity-0 lg:opacity-100"*/}
        {/*  />*/}
        {/*  <ParallaxImage*/}
        {/*    src="/showcase.avif"*/}
        {/*    offsetPos={0}*/}
        {/*    style={{top: '200px', left: '50%', transform: 'translateX(-50%)'}}*/}
        {/*    className="w-[900px] z-10 border-1 border-white/10 rounded-lg backdrop-blur-md"*/}
        {/*  />*/}
        {/*</div>*/}


        <div className='mt-12 mb-12 grid grid-cols-1 xl:grid-cols-2 gap-4'>
          <Feature title="Lightweight" description="Bloxlaunch takes up only 7MB of space." icon={FaFeatherAlt}/>
          <Feature title="Open-source" description="The code for Bloxlaunch is available at https://github.com/bloxlaunch/app" icon={FaGithub}/>
          <Feature title="Search" description="Search any Roblox game inside Bloxlaunch." icon={FaMagnifyingGlass}/>
          <Feature title="Account Free" description="No need to login to use." icon={FaUser}/>
          <Feature title="Compatible" description="Works with Bloxstrap, Fishstrap." icon={IoExtensionPuzzle}/>
          <Feature title="Private Server" description="Quick access to yours and others private servers."
                   icon={FaLock}/>
        </div>
      </div>
      {/*<div className={"w-full bg-white/0 h-[75px] border-t border-white/10 flex justify-center overflow-hidden"}>*/}
      {/*  <div className={"bg-white/0 h-full w-full lg:w-[1000px] flex"}>*/}
      {/*    <div className={"bg-white/30 w-1/2"}></div>*/}
      {/*    <div className={"bg-white/25 w-1/2 select-none flex content-center"}><p>Copyright &copy; 2025 RobTosPro</p> </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </>
  );
}

export default App;
