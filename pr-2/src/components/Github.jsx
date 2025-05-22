import React, { useEffect, useState } from "react";

const GithubCardBlackTheme = () => {
  const [input, setInput] = useState('');
  const [enter, setEnter] = useState({})

  useEffect(()=>{
    
  }, [])


  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6">
      <div className="w-full max-w-xl bg-neutral-900 rounded-3xl shadow-2xl p-8 space-y-8 text-white border border-neutral-700">
        <h1 className="text-4xl font-extrabold text-center">GitHub User Finder</h1>
        <div className="flex items-center gap-4">
          <input
            type="text"
            className="w-full bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-400 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
            placeholder="Enter GitHub username" 
            onChange={(e)=>{
                setInput(e.target.value)
            }}
          />
          <button
            type="button"
            className="bg-pink-600 hover:bg-pink-700 text-white px-5 py-3 rounded-xl font-semibold transition-all" onClick={()=>{
                setEnter(input)
                console.log(enter);
            }}
          >
            Search
          </button>
        </div>

        <div className="bg-neutral-900 border border-neutral-700 rounded-2xl shadow-xl p-6 text-center">
          <img
            src="https://avatars.githubusercontent.com/u/583231?v=4"
            alt="octocat"
            className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-pink-600 shadow-lg"
          />
          <h2 className="text-2xl font-bold">The Octocat</h2>
          <p className="text-pink-400">@octocat</p>
          <p className="mt-2 text-neutral-300 text-sm italic">
            "This is a sample bio for the GitHub profile card."
          </p>

          <div className="mt-6 grid grid-cols-3 gap-4 text-sm text-white/90">
            <div>
              <span className="block text-lg font-bold">3000</span>
              Followers
            </div>
            <div>
              <span className="block text-lg font-bold">50</span>
              Following
            </div>
            <div>
              <span className="block text-lg font-bold">120</span>
              Repos
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GithubCardBlackTheme;
