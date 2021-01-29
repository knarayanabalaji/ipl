function topTenEconomicalBowler(matches,deliveries){
    const noOfRuns={};
    const noOfOvers={};
    const result={};
    const res={};
    for (let match of matches)
    {
        for( let deliveri of deliveries)
        {
            if (match.season=="2015" && match.id == deliveri.match_id)
            {
                const bowler=deliveri.bowler;
                if (noOfRuns[bowler])
                {
                    noOfRuns[bowler]+= parseInt(deliveri.total_runs);
                    if (deliveri.ball == "1")
                    {
                        noOfOvers[bowler] +=1;
                    }
                }
                else {
                    noOfRuns[bowler]=parseInt(deliveri.total_runs);
                    noOfOvers[bowler]=1;
                }
            }
        }
    }

    for(let run in noOfRuns)
    {
        result[run]=parseFloat((noOfRuns[run]/noOfOvers[run]).toFixed(2));
    }
    let temp=Object.values(result);
    temp.sort(function(a, b){return a-b});
    
    for(let i=0;i<10;i++)
    {
      for(let j in result)
      {
      if(result[j]==temp[i])
      {
        
          res[j]=temp[i];
      }
    }
  }
  let outdata={};
   count=0;
   for(let i in res)
   {
     if(count<10){
       outdata[i]=res[i];
       count++;
     }  
     
   }
    return outdata;
    
}




module.exports = topTenEconomicalBowler;