module.exports = function createDreamTeam(members){
    if (!Array.isArray(members)) return false;
    let temp = [];
    let name = "";
    for (let i = 0; i < members.length; i++){
        if (typeof members[i] == "string"){
            let j = 0;
            while (members[i][j] == " ") j++;
            temp.push(members[i][j].toUpperCase());
        }
    }
    temp.sort();
    for (i = 0; i < temp.length; i++){
        name += temp[i];
    }
    return name;
}