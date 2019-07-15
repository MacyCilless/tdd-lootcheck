import balanceReducer from './balance';
import balanceReducer2 from './balance';
import * as constants from '../actions/constants';

describe('balanceReducer', () => {
    const balance = 10;

    describe('when initializing', () => {
        it('sets a balance', () => {
            //reducers take 2 arguments: previousState and an action 
            expect(balanceReducer(undefined, {type: constants.SET_BALANCE, balance}))
                .toEqual(balance);
        });
    
        describe('then re-initializing', () => {
            it('reads the balance from cookies', () => {
                expect(balanceReducer2(undefined, {})).toEqual(balance);
            });
        });
    });

    it('deposits into the balance', () => {
        const initialState = 10;
        const deposit = 20;

        expect(balanceReducer(initialState, {type: constants.DEPOSIT, deposit})).toEqual(initialState + deposit);
    });

    it('withdraws from the balance', () => {
        const initialState = 20;
        const withdrawal = 10;

        expect(balanceReducer(initialState, {type: constants.WITHDRAW, withdrawal})).toEqual(initialState - withdrawal);
    })
});