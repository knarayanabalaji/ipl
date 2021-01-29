function extraRunsConcededByEachTeam(matches,deliveries){
        const result={};
        for (let match of matches){
            for (let deliveri of deliveries){
                if (match.season=="2016" && match.id==deliveri.match_id){
                    const team=deliveri.bowling_team;
                    if (result[team]){
                        result[team]+=parseInt(deliveri.extra_runs);
                    }else {
                        result[team]=parseInt(deliveri.extra_runs);
                    }
                }
            }
        }
        return result;
}

module.exports = extraRunsConcededByEachTeam;