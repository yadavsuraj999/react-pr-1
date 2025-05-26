import React, { useEffect, useState, useRef } from "react";
import { toPng } from "html-to-image"; // ✅ import this

const Github = () => {
  const [input, setInput] = useState('');
  const [enter, setEnter] = useState({});
  const [user, setUser] = useState({});
  const cardRef = useRef(null); // ✅ ref for the card
  const inputClean = useRef(null)

  useEffect(() => {
    const person = async () => {
      let res = await fetch(`https://api.github.com/users/${input}`);
      let data = await res.json();
      setUser(data);
      console.log(data);
    };
    person();
  }, [enter]);

  const downloadCardAsPNG = () => {
    if (!cardRef.current) return;
    toPng(cardRef.current)
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = `${user.login || "github-user"}.png`;
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.error("Download failed", err);
      });
  };
  

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6">
      <div className="w-full max-w-xl bg-neutral-900 rounded-3xl shadow-2xl p-8 space-y-8 text-white border border-neutral-700">
        <h1 className="text-4xl font-extrabold text-center">GitHub User Finder</h1>
        <div className="flex items-center gap-4 ">
          <input
            ref ={inputClean}
            type="text"
            className="w-full bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-400 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
            placeholder="Enter GitHub username"
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <button
            type="button"
            className="bg-pink-600 hover:bg-pink-700 text-white px-5 py-3 rounded-xl font-semibold transition-all"
            onClick={() => {
              setEnter(input);
              {inputClean.current.value = ""}
              
              console.log(inputClean);
            }}
          >
            Search
          </button>
        </div>

        <div ref={cardRef} className="bg-neutral-900 border border-neutral-700 rounded-2xl shadow-xl p-6 text-center">
          <img
            src={!user.avatar_url ? "https://avatars.githubusercontent.com/u/176907896?v=4" : user.avatar_url}
            alt="octocat"
            className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-pink-600 shadow-lg"
          />
          <h2 className="text-2xl font-bold">{!user.name ? "Suraj Yadav" : user.name}</h2>
          <p className="text-pink-400">{user.login}</p>
          <p className="mt-2 text-neutral-300 text-sm italic">
            {!user.bio ? "On a journey to master full-stack development from front to back. Driven by curiosity, consistency, and a love for solving problems." : user.bio}
          </p>

          <div className="mt-6 grid grid-cols-3 gap-4 text-sm text-white/90">
            <div>
              <span className="block text-lg font-bold">{!user.followers ? "9" : user.followers}</span>
              Followers
            </div>
            <div>
              <span className="block text-lg font-bold">{!user.following ? "10" : user.following}</span>
              Following
            </div>
            <div>
              <span className="block text-lg font-bold">{!user.public_repos ? "21" : user.public_repos}</span>
              Repos
            </div>
          </div>
        </div>

        {/* ✅ Add download button below the card */}
        {user.login && (
          <div className="text-center mt-4">
            <button
              onClick={downloadCardAsPNG}
              className="bg-pink-600 hover:bg-pink-700 text-white px-5 py-3 rounded-xl font-semibold transition-all"
            >
              Download as PNG
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Github;
