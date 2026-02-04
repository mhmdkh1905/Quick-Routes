import { Outlet } from "react-router-dom";

import React from "react";

export default function RootLayout() {
  return (
    <div>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/about">About</a>
      </li>
      <li>
        <a href="/profile/1">Profile 1</a>
      </li>
      <Outlet />
    </div>
  );
}
