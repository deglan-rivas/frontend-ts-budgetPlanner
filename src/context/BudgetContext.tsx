import { BudgetActions, budgetReducer, BudgetState, initialState } from '@/reducers/budget-reducer';
import { createContext, ReactNode, useMemo, useReducer } from 'react';

type BudgetContextProps = {
  state: BudgetState
  dispatch: React.Dispatch<BudgetActions>
  totalExpenses: number
  availableBudget: number
}

export const BudgetContext = createContext<BudgetContextProps>(null!)

export const BudgetProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(budgetReducer, initialState)
  const totalExpenses = useMemo(() => state.expenses.reduce((total, expense) => total + expense.quantity, 0), [state.expenses])
  const availableBudget = useMemo(() => state.budget - totalExpenses, [state.budget, totalExpenses])

  return (
    <BudgetContext.Provider value={{
      state,
      dispatch,
      totalExpenses,
      availableBudget
    }}>
      {children}
    </BudgetContext.Provider>
  )
}