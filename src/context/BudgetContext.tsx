import { BudgetActions, budgetReducer, BudgetState, initialState } from '@/reducers/budget-reducer';
import { createContext, ReactNode, useReducer } from 'react';

type BudgetContextProps = {
  state: BudgetState
  dispatch: React.Dispatch<BudgetActions>
}

export const BudgetContext = createContext<BudgetContextProps>(null!)

export const BudgetProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(budgetReducer, initialState)

  return (
    <BudgetContext.Provider value={{
      state,
      dispatch
    }}>
      {children}
    </BudgetContext.Provider>
  )
}