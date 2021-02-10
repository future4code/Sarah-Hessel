import { Character } from "./entities/Character";
import { validateCharacter } from "./validateCharacter";

export function performAttacka (attacker: Character, defender: Character){
    try{
        const validateAttacker =  validateCharacter(attacker)
        const validateDefender =  validateCharacter(defender)

        if(!validateAttacker || !validateDefender){
            throw new Error ("Invalid Character")
        }
        if (defender.defense < attacker.strength){
           defender.life = ((attacker.strength) - (defender.defense))
        }
    }
    catch(e){
        throw new Error(e.message)
    }

}