import { getProductState } from "../../helpers/getProductState"

describe('Testings of helper getProductState', () => { 
    
    test('Must return a object with the state data', () => {
        const state = getProductState('new');

        expect( state ).toBeTruthy();
        expect( state ).toEqual({
            name: expect.any( String ),
            description: expect.any( String )
        })
    })
})