import { Expense } from "@/types"

export interface BudgetState {
  budget: number
  expenses: Expense[]
  newExpense: Expense
  currentExpense: Expense
  filter: string
  isNewModal: boolean,
  isUpdateModal: boolean
}

export type BudgetActions =
  { type: "add-budget", payload: { budget: number } } |
  { type: "add-expense", payload: { expense: Expense } } |
  { type: "update-expense", payload: { updatedExpense: Expense } } |
  { type: "delete-expense", payload: { id: Expense['id'] } } |
  { type: "reset-app" } |
  { type: "set-filter", payload: { filter: string } } |
  { type: "change-new-modal", payload: { isOpen: boolean } } |
  { type: "change-update-modal", payload: { isOpen: boolean, currentExpense: Expense } } |
  { type: "update-current-expense", payload: { expense: Expense } }

const initialExpenses: Expense[] = localStorage.getItem('expenses') ? JSON.parse(localStorage.getItem('expenses') || '[]') : []
const initialBudget = localStorage.getItem('budget') ? Number(localStorage.getItem('budget')) : 0
export const initialExpense: Expense = {
  id: "notnull",
  category: "",
  name: "",
  quantity: 0,
  date: "",
}

export const initialState: BudgetState = {
  budget: initialBudget,
  expenses: initialExpenses,
  newExpense: initialExpense,
  currentExpense: initialExpense,
  filter: "",
  isNewModal: false,
  isUpdateModal: false
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
    case "set-filter":
      return {
        ...state,
        filter: action.payload.filter
      }
    case "change-new-modal":
      return {
        ...state,
        isNewModal: action.payload.isOpen
      }
    case "change-update-modal":
      return {
        ...state,
        isUpdateModal: action.payload.isOpen,
        currentExpense: action.payload.currentExpense
      }
    case "update-current-expense":
      return {
        ...state,
        currentExpense: action.payload.expense
      }
    default:
      return state
  }
}