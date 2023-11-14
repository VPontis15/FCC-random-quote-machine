import getRandomNumber from "./getRandomNumber";

export default function getRandomColor() {
  return `rgba(${getRandomNumber(225)},${getRandomNumber(
    225
  )},${getRandomNumber(225)})`;
}
