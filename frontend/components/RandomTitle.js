import React from "react";

const randomTitle = () => {
  const strings = [
    "GAIA EXCEEDS",
    "YOU WILL DIE",
    "FREE ME",
    "BONDAGE OF SELF",
    "STAGES OF GRIEF",
    "SURRENDER",
    "SYSTEM CRISIS",
    "GRAVITY SPINE SEX",
    "DREAM",
  ];

  const min = 0;
  const max = strings.length;
  const idx = Math.floor(Math.random() * (max - min) + min);

  return strings[idx];
};

// Refresh on page reload
const title = randomTitle();

const RandomTitle = () => <>{title}</>;

export default RandomTitle;
