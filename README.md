DAY 2 — SOMETHING TO LISTEN TO

Fresh folder for the Day 2 website.

1. Extract the folder.
2. Open it in VS Code.
3. Run:

   npm install
   npm run dev

4. Open the local Vite URL.

IMPORTANT:
Open src/main.jsx and replace:

const SPOTIFY_URL = "https://open.spotify.com/";

with Jahanvi's real Spotify playlist URL.

Example:

const SPOTIFY_URL = "https://open.spotify.com/playlist/XXXXXXXX";

For Vercel, if the Vite permission problem returns, use:

Build Command:
node node_modules/vite/dist/node/cli.js build

Output Directory:
dist


## Updated background
The Day 2 background now uses the supplied morpho butterfly video with a darker iridescent blue/teal/violet field-journal atmosphere, drifting luminous motes, cinematic vignette, and subtle grain.

The Vercel build command is also set up to avoid the Vite permission-wrapper issue: `node node_modules/vite/dist/node/cli.js build`.
