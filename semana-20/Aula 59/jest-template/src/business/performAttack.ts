import { Character } from "./entities/Character";
import { validateCharacter } from "./validateCharacter";

export function performAttacka (attacker: Character, defender: Character){
    try{
        const validateAttacker =  validateCharacter(attacker)
        const validateDefender =  validateCharacter(defender)

        if(!validateAttacker || !validateDefender){
            throw new Error ("Invalid Character")
        }
        if (attacker.strength > defender.defense){
           defender.life = ((attacker.strength) - (defender.defense))
        }
    }
    catch(e){
        throw new Error(e.message)
    }

}

export function performAttackInverted  (
    attacker: Character, 
    defender: Character,
    validator: (input: any) => boolean
    ){
    try{
        const validateAttacker =  validator(attacker)
        const validateDefender =  validator(defender)

        if(!validateAttacker || !validateDefender){
            throw new Error ("Invalid Character")
        }
        if (attacker.strength > defender.defense){
           defender.life = ((attacker.strength) - (defender.defense))
        }
    }
    catch(e){
        throw new Error(e.message)
    }

}