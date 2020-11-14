import React from "react";

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

const randomTitle = () => {
  const min = 0;
  const max = strings.length;
  const idx = Math.floor(Math.random() * (max - min) + min);

  return strings[idx];
};

const RandomTitle = () => <>{randomTitle()}</>;

export default RandomTitle;
