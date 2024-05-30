import { Expense } from "@/types"

export interface BudgetState {
  budget: number
  expenses: Expense[]
  expense: Expense
  filter: string
  isModelOpen: boolean
}

export type BudgetActions =
  { type: "add-budget", payload: { budget: number } } |
  { type: "add-expense", payload: { expense: Expense } } |
  { type: "update-expense", payload: { updatedExpense: Expense } } |
  { type: "delete-expense", payload: { id: Expense['id'] } } |
  { type: "reset-app" }

const initialExpenses: Expense[] = localStorage.getItem('expenses') ? JSON.parse(localStorage.getItem('expenses') || '[]') : []
const initialBudget = localStorage.getItem('budget') ? Number(localStorage.getItem('budget')) : 0
const initialExpense: Expense = {
  id: "notnull",
  category: "",
  name: "",
  quantity: 0,
  date: "",
}

export const initialState: BudgetState = {
  budget: initialBudget,
  expenses: initialExpenses,
  expense: initialExpense,
  filter: "",
  isModelOpen: false
}

export const budgetReducer = (
  state: BudgetState,
  action: BudgetActions
) => {

  switch (action.type) {
    case "add-budget":
      return {
        ...state,
        budget: action.payload.budget
      }
    case "add-expense":
      return {
        ...state,
        expenses: [...state.expenses, action.payload.expense]
      }
    case "update-expense":
      return {
        ...state,
        expenses: state.expenses.map((expense) => expense.id === action.payload.updatedExpense.id ? action.payload.updatedExpense : expense)
      }
    case "delete-expense":
      return {
        ...state,
        expenses: state.expenses.filter((expense) => expense.id !== action.payload.id)
      }
    case "reset-app":
      return {
        ...state,
        budget: 0,
        expenses: [],
        expense: initialExpense
      }
    default:
      return state
  }
}