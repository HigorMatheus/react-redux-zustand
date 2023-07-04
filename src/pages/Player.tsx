import { ChevronDown, MessageCircle, Video } from "lucide-react";
import ReactPlayer from "react-player";

export function Player() {
  return (
    <div className="flex items-center justify-center h-screen bg-zinc-950 text-zinc-50">
      <div className="flex w-11/12 max-w-[1100px] flex-col gap-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-bold">Fundamentos do Redux test </h1>
            <span className="text-sm text-zinc-400">
              Modulo "Desvendando o Redux"
            </span>
          </div>
          <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-white transition-colors rounded bg-violet-500 hover:bg-violet-600 ">
            <MessageCircle className="w-4 h-4" />
            Deixar Feedback
          </button>
        </div>
        <main className="relative flex overflow-hidden border rounded-lg shadow pr-80 border-zinc-800 bg-zinc-900">
          <div className="flex-1">
            <div className="w-full bg-zinc-950 aspect-video">
              <ReactPlayer
                width="100%"
                height="100%"
                controls
                url="https://www.youtube.com/watch?v=oPOKpSFqy-I&t=1171s"
              />
            </div>
          </div>
          <aside className="absolute top-0 bottom-0 right-0 overflow-y-scroll border-l divide-y-2 w-80 divide-zinc-900 border-zinc-800 bg-zinc-900 scrollbar scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800">
            <div>
              <button className="flex items-center w-full gap-3 p-4 bg-zinc-800">
                <div className="flex items-center justify-center w-10 h-10 text-xs rounded-full bg-zinc-950">
                  1
                </div>
                <div className="flex flex-col gap-1 text-left">
                  <strong className="text-sm">Desvendando o Redux</strong>
                  <span className="text-sm text-zinc-400"> 12 aulas</span>
                </div>
                <ChevronDown className="w-5 h-5 ml-auto text-zinc-400" />
              </button>
            </div>
            <div>
              <button className="flex items-center w-full gap-3 p-4 bg-zinc-800">
                <div className="flex items-center justify-center w-10 h-10 text-xs rounded-full bg-zinc-950">
                  1
                </div>
                <div className="flex flex-col gap-1 text-left">
                  <strong className="text-sm">Desvendando o Redux</strong>
                  <span className="text-sm text-zinc-400"> 12 aulas</span>
                </div>
                <ChevronDown className="w-5 h-5 ml-auto text-zinc-400" />
              </button>
              <nav className="relative flex flex-col gap-4 p-6">
                <button className="flex items-center gap-3 text-sm text-zinc-400">
                  <Video className="w-4 h-4 text-zinc-500" />
                  <span>Fundamentos do Redux</span>
                  <span className="ml-auto font-mono text-xs text-zinc-500">
                    09:13
                  </span>
                </button>

                <button className="flex items-center gap-3 text-sm text-zinc-400">
                  <Video className="w-4 h-4 text-zinc-500" />
                  <span>Fundamentos do Redux</span>
                  <span className="ml-auto font-mono text-xs text-zinc-500">
                    09:13
                  </span>
                </button>

                <button className="flex items-center gap-3 text-sm text-zinc-400">
                  <Video className="w-4 h-4 text-zinc-500" />
                  <span>Fundamentos do Redux</span>
                  <span className="ml-auto font-mono text-xs text-zinc-500">
                    09:13
                  </span>
                </button>
              </nav>
            </div>
          </aside>
        </main>
      </div>
    </div>
  );
}