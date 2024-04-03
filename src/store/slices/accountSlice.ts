import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface AccountState {
    balance: number
    loan: number,
    loanPurpose: string,
    isActive: boolean
}

const initialState: AccountState = {
    balance: 0,
    loan: 0,
    loanPurpose: "",
    isActive: false

}

export const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {

        openAccount: (state)=> {
            if(state.isActive) return
            state.balance = 100
            state.loan = 0
            state.isActive = true
        },
        closeAccount: (state) => {

        },
        withdraw: (state, action: PayloadAction<number>) => {
            state.balance -= action.payload
           
        },
        deposit: (state, action: PayloadAction<number>) => {
            state.balance += action.payload
        },
        requestLoan:(state, action: PayloadAction<{amount: number, purpose: string}>) => {
                if(state.loan > 0) return
                state.loan = action.payload.amount
                state.loanPurpose = action.payload.purpose
                state.balance += action.payload.amount
    
        },
        payLoan: (state, action: PayloadAction<number>) => {
            state.balance -= action.payload
            state.loan = 0
            state.loanPurpose = ""
        }  
    },
  })


// Action creators are generated for each case reducer function
export const {openAccount, closeAccount, withdraw, deposit, requestLoan, payLoan  } = accountSlice.actions

export default accountSlice.reducer