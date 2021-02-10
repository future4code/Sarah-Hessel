import { Character } from "./entities/Character";

export function validateCharacter(input: Character){
    if(
        !input.name || 
        input.strength === undefined ||
        input.defense === undefined || 
        input.life === undefined
        ){
        return false
    }
    if(input.life <= 0 || input.strength <= 0 || input.defense <= 0){
        return false
    }
    return true
}