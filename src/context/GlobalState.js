import React,{createContext,useReducer} from 'react'
import reducer from './reducer'

// initial state
const initialstate={
    transactions:[]
}
// create context
export const GlobalContext = createContext(initialstate);

// provider component
export const GlobalProvider =({children})=>{
  const [state,dispatch] = useReducer(reducer,initialstate)

//   delete Transaction
 const deleteTransaction = (id)=>{
     dispatch({type: 'DELETE_TRANSACTION',payload: id})
 }

//  add transaction
const addTransaction=(transaction)=>{
    dispatch({type: 'ADD_TRANSACTION',payload: transaction})
}


  
  return (
      <GlobalContext.Provider value={{
          transactions: state.transactions,
          deleteTransaction,
          addTransaction
      }}>
          {children}
      </GlobalContext.Provider>
  )

}