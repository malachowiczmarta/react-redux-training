import React from "react";
import HomeButtons from "../components/HomeButtons";
import { connect } from "react-redux";
import { fetchPosts } from "../redux";

export default function Home() {
  function fatchData() {}

  return (
    <div className="home-container">
      <h1>HOME</h1>
      <HomeButtons />
    </div>
  );
}
