import { Link } from "react-router-dom";
import click from "../audio/rclick.mp3";

export const Homepage = () => {
  const playClick = () => {
    new Audio(click).play();
  };

  return (
    <div className="">
      <div className=" min-h-screen flex flex-col items-center justify-center bg-indigo-900 bg-[url('./images/arcade.jpg')] bg-center bg-cover">
        <p className="animate-bounce text-center -mt-40 bg-slate-100 rounded-lg px-2">
          Hello, click on the game to start playing:)
        </p>
        <div class="mt-40 -mb-3">
          <div class="not-prose relative bg-slate-50 rounded-xl overflow-hidden dark:bg-slate-800/25">
            <div class="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"></div>
            <div class="relative rounded-xl overflow-auto p-8">
              <div class="grid grid-cols-6 gap-4 font-mono text-white text-sm text-center font-bold leading-6">
                <div class="p-4 rounded-lg bg-stripes-sky"></div>
                <Link
                  onClick={() => playClick()}
                  to={"/Edip"}
                  class="p-4 rounded-lg shadow-lg bg-sky-500 col-start-3 col-span-2"
                >
                  1.Edip
                </Link>
                <div class="p-4 rounded-lg bg-stripes-sky"></div>
                <Link
                  onClick={() => playClick()}
                  to={"./Chathu"}
                  class="p-4 rounded-lg shadow-lg bg-sky-500 col-start-1 col-end-3"
                >
                  4.Chathu
                </Link>
                <div class="p-4 rounded-lg bg-stripes-sky"></div>
                <div class="p-4 rounded-lg bg-stripes-sky"></div>
                <Link
                  onClick={() => playClick()}
                  to={"/Elys"}
                  class="p-4 rounded-lg shadow-lg bg-sky-500 col-end-7 col-span-2"
                >
                  2.Elys
                </Link>
                <Link
                  onClick={() => playClick()}
                  to={"./Denis"}
                  class="animate-pulse p-4 rounded-lg shadow-lg bg-sky-500 col-start-3 col-span-2"
                >
                  3.Denis
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
