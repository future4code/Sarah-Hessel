import { Character } from "../src/business/entities/Character"
import { validateCharacter } from "../src/business/validateCharacter"

describe("validateCharacter", () => {
    test("Should return 'false' when the name is an empty string", () => {
        
        const character: Character = {
            name: "",
            life: 1500,
            defense: 2000,
            strength: 1800
        }

        const result = validateCharacter(character)
        expect(result).toEqual(false)
    })
    test("Should return 'false' when the character's life is zero", () => {
        
        const character: Character = {
            name: "Gamora",
            life: 0,
            defense: 2000,
            strength: 1800
        }

        const result = validateCharacter(character)
        expect(result).toEqual(false)
    })
    test("Should return 'false' when the character's strength is zero", () => {
        
        const character: Character = {
            name: "Gamora",
            life: 1500,
            defense: 2000,
            strength: 0
        }
        
        const result = validateCharacter(character)
        expect(result).toEqual(false)
    })
    test("Should return 'false' when the character's defense is zero", () => {
        
        const character: Character = {
            name: "Gamora",
            life: 1500,
            defense: 0,
            strength: 1800
        }
        
        const result = validateCharacter(character)
        expect(result).toEqual(false)
    })
    test("Should return 'false' if life, defense or strength is a negative number", () => {
        
        const character: Character = {
            name: "Gamora",
            life: 1500,
            defense: -2000,
            strength: 1800
        }
        
        const result = validateCharacter(character)
        expect(result).toEqual(false)
    })
    test("Should return true for all valid inputs", () => {
        
        const character: Character = {
            name: "Gamora",
            life: 1500,
            defense: 2000,
            strength: 1800
        }
        
        const result = validateCharacter(character)
        expect(result).toEqual(true)
    })
})