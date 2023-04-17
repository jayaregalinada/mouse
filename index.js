#!/usr/bin/env node

import robot from 'robotjs';

const screenSize = robot.getScreenSize();
const height = screenSize.height / 2 - 10;
const width = screenSize.width;
const intervalMs = 3000;
const mouseDelay = 2;

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

robot.setMouseDelay(mouseDelay);

setInterval(() => {
  robot.moveMouseSmooth(getRandomInt(0, width), getRandomInt(0, height));
}, intervalMs);
