/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
   

     let newscore=[...score].sort((a,b)=>b-a);
    
    let resultmap= new Map();
    
    for(let i=0;i<newscore.length;i++){
        resultmap.set(newscore[i],i) //10,9,8,4,3
    }
    console.log(resultmap)
    for(i=0;i<score.length;i++){
        score[i]="" + (resultmap.get(score[i])+1) //1,5,3,2,4

        if(score[i]=="1") score[i]="Gold Medal";
        if(score[i]=="2" )score[i]="Silver Medal";
        if(score[i]=="3" )score[i]="Bronze Medal";
    }
    return score;
};