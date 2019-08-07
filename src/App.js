import React from "react";
import "./App.css";
import BackgroundVideo from "./components/BackgroundVideo";
import video from "./nature.mp4";

function App() {
  return (
    <div className="App">
      <BackgroundVideo
        videoUrl={video}
        navLinks={[
          { link: "/dashboard", name: "First Link" },
          { link: "/home", name: "Second Link" }
        ]}
        logo="logo"
      />
    </div>
  );
}

export default App;
