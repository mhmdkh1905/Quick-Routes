import { Outlet } from "react-router-dom";

import React from "react";

export default function RootLayout() {
  return (
    <div>
      <li>
        <a href="/home">Home</a>
      </li>
      <li>
        <a href="/about">About</a>
      </li>
      <li>
        <a href="/profile">Profile</a>
      </li>
      <Outlet />
    </div>
  );
}
