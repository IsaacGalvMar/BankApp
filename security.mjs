
import { getUserSecurityLevel } from "./data.mjs";

export function isAdmisable(token ,level){
    console.log(level);

    if(token == undefined){
        return false;
    }

    return getUserSecurityLevel(token) == level;
}