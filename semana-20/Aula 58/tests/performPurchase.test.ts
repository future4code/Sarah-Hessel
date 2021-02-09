import { User } from '../src/business/entities/User'
import {performPurchase} from '../src/business/performPurchase'


describe("performPurchase", () =>{
    test("Should return true when the input has a balance greater than the purchase value", () => {

        const user: User = {
            name: "Sarah",
            balance: 100
        }
    
        const result = performPurchase(user, 50)
        
        expect(result).toEqual({
            ...user,
            balance: 50
        })
    })
    test("Should return true when the input has a balance equal to the purchase amount", () => {

        const user: User = {
            name: "Sarah", 
            balance: 50
        }

        const result = performPurchase(user, 50)

        expect(result).toEqual({
            ...user, 
            balance: 0
        })
    })
    test("should return false when the input has a balance less than the purchase amount", () => {

        const user: User = {
            name: "Sarah", 
            balance: 30
        }

        const result = performPurchase(user, 60)

        const isFalse = result ? true : false 
        console.log(isFalse)  // false, só pra estudos. realmente ver que retorna um result falso.
        
        expect(result).toEqual(undefined)
    })
})