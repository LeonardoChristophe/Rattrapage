function getMostPopularPlaces(Places) {
  let popularPlaces = {};
  for (let i = 0; i < Places.length; i++) {
    popularPlaces[Places[i]] = (popularPlaces[Places[i]] || 0) + 1;
  }
  let maxCount = 0;
  let mostPopularPlaces = [];
  for (let place in popularPlaces) {
    if (popularPlaces[place] > maxCount) {
      maxCount = popularPlaces[place];
      mostPopularPlaces = [place];
    } else if (popularPlaces[place] === maxCount) {
      mostPopularPlaces.push(place);
    }
  }
  return mostPopularPlaces.join(" ");
}

console.log(
  getMostPopularPlaces([
    "Analamahitsy",
    "Analamahitsy",
    "Itaosy",
    "Behoririka",
    "Itaosy",
    "Itaosy",
  ])
);
