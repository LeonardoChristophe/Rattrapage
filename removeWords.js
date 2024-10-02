function removeWords(original, wordsToRemove) {
  let words = original.split;
  for (let i = 0; i < wordsToRemove.length; i++) {
    original = original.replace(new RegExp(wordsToRemove[i], "gi"), "");
  }
  return original.trim();
}
console.log(removeWords(original, wordsToRemove));
