const fs = require("fs");
const csv = require("csvtojson");
const matchesPlayedPerYear = require("./ipl/matchesPlayedPerYear");
const extraRunsConcededByEachTeam = require("./ipl/extraRunsConcededByEachTeam");
const topTenEconomicalBowler = require("./ipl/topTenEconomicalBowler");
const matchesWonByEachTeam = require("./ipl/matchesWonByEachTeam");


const MATCHES_FILE_PATH = "./csv_data/matches.csv";
const DELIVERIES_FILE_PATH = "./csv_data/deliveries.csv";
const JSON_OUTPUT_FILE_PATH = "./public/data.json";

function main() {
  csv()
    .fromFile(MATCHES_FILE_PATH)
    .then(matches => {
      csv()
    .fromFile(DELIVERIES_FILE_PATH)
    .then(deliveries => {
      let result1 = matchesPlayedPerYear(matches);
      let result2 = extraRunsConcededByEachTeam(matches,deliveries);
      let result3 = topTenEconomicalBowler(matches,deliveries);
      let result4 = matchesWonByEachTeam(matches);
      saveMatchesPlayedPerYear(result1,result2,result3,result4);
    });
  });
}

function saveMatchesPlayedPerYear(result1,result2,result3,result4) {
  const jsonData = {
    matchesPlayedPerYear: result1,
    extraRunsConcededByEachTeam: result2,
    topTenEconomicalBowler : result3,
    matchesWonByEachTeam : result4
  };
  const jsonString = JSON.stringify(jsonData);
  fs.writeFile(JSON_OUTPUT_FILE_PATH, jsonString, "utf8", err => {
    if (err) {
      console.error(err);
    }
  });
}

main();
