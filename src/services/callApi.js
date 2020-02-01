import { dataProvider } from "./dataProvider";

export const api = {
    getMatches: ()=>{
        dataProvider("/matches").then(res => {
            //let {id, intervalMillis, matchTo, teamID, turnMillis, turns} = res[0];
            localStorage.setItem('matches', JSON.stringify(res.data[0]));
        }).catch(err => console(err));
    },
    getCurrMatch: async ()=>{
        let matches = await JSON.parse(localStorage.getItem('matchID'));
        dataProvider(`/matches/${matches}`).then(res => {
            localStorage.setItem('currMatch', JSON.stringify(res.data));
        }).catch(err => console.log(err));
    },
    sendAction: (actionList)=>{
        let matches = JSON.parse(localStorage.getItem('matches'));
        dataProvider(`/matches/${matches.teamID}/action`, {
            method: "POST",
            data: actionList
        }).then(res => {
            res.data.action.forEach(agent => {
                let id = agent.agentID;
                let dx = agent.dx;
                let dy = agent.dy;
                let matchCurr = JSON.parse(localStorage.getItem('currMatch'));
                let {tiled, teams} = matchCurr;
                let team;
                for (let i=0;i<teams.length;i++){
                    if (teams[i].teamID === matches.teamID){
                        team = teams[i];
                        break;
                    }
                }
                let listAgent = team.agents;
                let oldDx,oldDy;
                for (let i=0;i<listAgent.length;i++){
                    if (listAgent[i].agentID===id){
                        oldDx = listAgent[i].x;
                        oldDy = listAgent[i].y;
                        listAgent[i].x = dx;
                        listAgent[i].y = dy;
                        break;
                    }
                }
                tiled[oldDx][oldDy] = 0;
                tiled[dx][dy] = id;
                localStorage.setItem('matchCurr', JSON.stringify({
                    ...matchCurr,
                    teams: teams,
                    tiled: tiled
                }));
            });
        }).catch(err => console.log(err));
    }
};