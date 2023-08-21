import React from "react";
import Behaviour from "./components/Behaviour";
import Graph from "./components/Graph";
import Header from "./components/Header";
import Insights from "./components/Insights";
import Leaderboard from "./components/Leaderboard";
import Location from "./components/Location";
import Traffic from "./components/Traffic";

function App() {
  return (
    <div className="App font-karla bg-[#f9fafb] min-h-screen px-6 md:px-8  lg:px-12 py-16">
      <div className="max-w-xl lg:max-w-6xl mx-auto">
        <Header />
        <Graph />
        <Insights />
        <div className="flex flex-col lg:flex-row gap-x-6">
          <Leaderboard />
          <Traffic />
        </div>
        <div className="flex flex-col lg:flex-row gap-x-6">
          <Location />
          <Behaviour />
        </div>
      </div>
    </div>
  );
}

export default App;
