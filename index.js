// Code your solution in this file!
const headquarters = 42;
const blockLength = 264;

function distanceFromHqInBlocks(distance) {
  return Math.abs(distance - headquarters);
};

function distanceFromHqInFeet(distance) {
  return distanceFromHqInBlocks(distance) * blockLength;
};

function distanceTravelledInFeet(startDistance, endDistance) {
   return Math.abs((endDistance - startDistance) * blockLength);
};

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
  let fairPrice = 0;
  if (distance < 400) {
    return fairPrice;
  } else if (distance >= 400 && distance < 2000) {
    return fairPrice = distance * 0.02;
  } else if (distance > 2000 && distance <= 2500) {
    return fairPrice = 25;
  } else if (distance > 2500) {
    return 'cannot travel that far';
  }
};
