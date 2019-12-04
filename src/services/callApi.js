import { dataProvider } from "./dataProvider";

export const api = {
    getMatches: ()=>{
        dataProvider("/matches").then(res => {
            //let {id, intervalMillis, matchTo, teamID, turnMillis, turns} = res[0];
            console.log(res.data);
            localStorage.setItem('matches', JSON.stringify(res.data));
        }).catch(err => console(err));
    },
    getCurrMatch: ()=>{
        let id = JSON.parse(localStorage.getItem('matchID'));
        dataProvider(`/matches/${id}`).then(res => {
            localStorage.setItem('matchCurr', JSON.stringify(res.data));
        }).catch(err => console.log(err));
    },
    sendAction: (actionList)=>{
        let matches = JSON.parse(localStorage.getItem('matchID'));
        dataProvider(`/matches/${matches}/action`, {
            method: "POST",
            data: actionList
        }).then(res => {
            console.log(res.data);
        }).catch(err => console.log(err));
    }
};