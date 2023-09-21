function climbingLeaderboard(ranked, player) {
  let uniqueRanked = [...new Set(ranked)]; // Remove duplicates from ranked
  let currentRank = uniqueRanked.length + 1; // Initialize currentRank

  let array = [];

  for (let i = 0; i < player.length; i++) {
    while (currentRank > 1 && player[i] >= uniqueRanked[currentRank - 2]) {
      currentRank--;
    }
    array.push(currentRank);
  }

  return array;
}
