function fetchAndVisualizeData() {
  fetch("./data.json")
    .then(r => r.json())
    .then(visualizeData);
}

fetchAndVisualizeData();

function visualizeData(data) {
  visualizeMatchesPlayedPerYear(data.matchesPlayedPerYear);
  visualizeExtraRunsConcededByEachTeam(data.extraRunsConcededByEachTeam);
  visualizetopTenEconomicalBowlers(data.topTenEconomicalBowler);
  visualizeMatchesWonByEachTeam(data.matchesWonByEachTeam);
  return;
}

function visualizeMatchesPlayedPerYear(matchesPlayedPerYear) {
  const seriesData = [];
  for (let year in matchesPlayedPerYear) {
    seriesData.push([year, matchesPlayedPerYear[year]]);
  }

  Highcharts.chart("matches-played-per-year", {
    chart: {
      type: "column"
    },
    title: {
      text: "Matches Played Per Year"
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      type: "category"
    },
    yAxis: {
      min: 0,
      title: {
        text: "Matches"
      }
    },
    series: [
      {
        name: "Years",
        data: seriesData
      }
    ]
  });
}

function visualizeExtraRunsConcededByEachTeam(extraRunsConcededByEachTeam) {
  const seriesData = [];
  for (let team in extraRunsConcededByEachTeam) {
    seriesData.push([team, extraRunsConcededByEachTeam[team]]);
  }

  Highcharts.chart("extra-Runs-Conceded-By-Each-Team", {
    chart: {
      type: "column"
    },
    title: {
      text: "Extra Runs Conceded By EachTeam In The Year 2016"
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      type: "category"
    },
    yAxis: {
      min: 0,
      title: {
        text: "Extra Runs"
      }
    },
    series: [
      {
        name: "Team",
        data: seriesData
      }
    ]
  });
}


function visualizetopTenEconomicalBowlers(topTenEconomicalBowler){
  const seriesData = [];
  for (let bowler in topTenEconomicalBowler) {
    seriesData.push([bowler,topTenEconomicalBowler[bowler]]);
  }

  Highcharts.chart("top-Ten-Economical-Bowlers", {
    chart: {
      type: "column"
    },
    title: {
      text: "Top Ten Economical Bowlers In The Year 2016"
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      type: "category"
    },
    yAxis: {
      min: 0,
      title: {
        text: "Economy"
      }
    },
    series: [
      {
        name: "Bowler",
        data: seriesData
      }
    ]
  });
}

function visualizeMatchesWonByEachTeam(matchesWonByEachTeam) {
    
  
  const teams={};
  const years =[];
  const names=[];
  for(let year in matchesWonByEachTeam)
  {
    for(let team in matchesWonByEachTeam[year])
    {
      if(!teams[team])
      {
        teams[team]=[];
      }
    }
    years.push(year);
  }
  for(let year in matchesWonByEachTeam)
  {
     for(let i in teams)
      {
       if(!(matchesWonByEachTeam[year].hasOwnProperty(i)))
        {
          teams[i].push(0);
        }
      }
    
    for(let team in matchesWonByEachTeam[year])
    {
      if(teams[team])
      {
        teams[team].push(matchesWonByEachTeam[year][team]);
      }
    }
    
  }
  for(let team in teams)
  {
    let t={};
    t.name=team;
    t.data=teams[team];
    names.push(t);
   
  }
  

  Highcharts.chart('matches-Won-By-Each-Team', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Matches Won By Each Team'
    },
    xAxis: {
        categories: years,
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
          text: 'No. of Matches'
      }
  },
  tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y:.0f} </b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
  },
  plotOptions: {
      column: {
          pointPadding: 0.2,
          borderWidth: 0
      }
  },
  series: names
  
  });


}

