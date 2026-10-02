import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Heart,
  Music2,
  Sparkles
} from "lucide-react";
import "./styles.css";

// Paste Jahanvi's Spotify playlist URL here.
const SPOTIFY_URL = "https://open.spotify.com/";

const songs = [
  ["a little piece of us", "for the moments that feel like home"],
  ["late night thoughts", "for when you miss me just a tiny bit"],
  ["strawberry skies", "because you make ordinary days softer"]
];

function App() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [spinning, setSpinning] = useState(false);

  useEffect(() => {
    const handleMove = (event) => {
      setMouse({
        x: (event.clientX / window.innerWidth - 0.5) * 2,
        y: (event.clientY / window.innerHeight - 0.5) * 2
      });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <main className="page">
      <div
        className="video-layer"
        style={{
          transform: `translate3d(${mouse.x * 10}px, ${mouse.y * 10}px, 0) scale(1.04)`
        }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          src="https://zxdefgavgwfxastwmmjm.supabase.co/storage/v1/object/public/assets/morpho.mp4"
        />
      </div>

      <div className="scrim" />
      <div className="grain" />

      <div className="petals" aria-hidden="true">
        {Array.from({ length: 18 }, (_, index) => (
          <span key={index}>
            {index % 3 === 0 ? "♡" : "✦"}
          </span>
        ))}
      </div>

      <header className="topbar">
        <div className="brand">
          <span className="brand-mark">✦</span>
          <span>01of11</span>
        </div>
        <div className="date">OCTOBER 02 · 2026</div>
      </header>

      <section className="hero">
        <div className="eyebrow reveal d1">DAY 02 / 11</div>

        <h1 className="title reveal d2">
          Something
          <em>to listen to.</em>
        </h1>

        <p className="intro reveal d3">
          Today, I didn't want to give you something you could hold.
          <br />
          I wanted to give you something you could <i>feel.</i>
        </p>

        <div className="music-card reveal d4">
          <div className="card-top">
            <div className="album-art">
              <Music2 size={30} strokeWidth={1.4} />
              <span>♡</span>
            </div>

            <div className="card-copy">
              <div className="small-label">A LITTLE PLAYLIST FOR</div>
              <h2>My Strawberry Baby Doll</h2>
              <p>
                songs I'd want playing if you were sitting beside me.
              </p>
            </div>

            <button
              className={`vinyl ${spinning ? "spinning" : ""}`}
              onClick={() => setSpinning((value) => !value)}
              aria-label="Animate record"
            >
              <span className="vinyl-hole" />
            </button>
          </div>

          <div className="track-list">
            {songs.map(([title, note], index) => (
              <div className="track" key={title}>
                <span className="track-number">
                  0{index + 1}
                </span>

                <div>
                  <strong>{title}</strong>
                  <small>{note}</small>
                </div>

                <span className="track-heart">♡</span>
              </div>
            ))}
          </div>

          <a
            className="spotify-button"
            href={SPOTIFY_URL}
            target="_blank"
            rel="noreferrer"
          >
            <span className="spotify-icon">●</span>
            Open my playlist on Spotify
            <ExternalLink size={16} />
          </a>

          <p className="tiny-note">
            press play, close your eyes, and think of me for a minute. ♡
          </p>
        </div>

        <div className="message reveal d5">
          <Sparkles size={15} />
          <span>Some songs just sound better when they're about you.</span>
          <Heart size={14} fill="currentColor" />
        </div>
      </section>

      <nav className="bottom-nav">
        <a href="/" className="nav-link">
          <ArrowLeft size={17} />
          Day 1
        </a>

        <span className="counter">
          02 <i>of</i> 11
        </span>

        <a href="/day-3" className="nav-link">
          Day 3
          <ArrowRight size={17} />
        </a>
      </nav>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
