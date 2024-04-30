import { useState } from "react"
import BudgetForm from "./components/BudgetForm"
import BudgetTracker from "./components/BudgetTracker"
import ExpenseDialog from "./components/ExpenseDialog"
import ExpenseFilter from "./components/ExpenseFilter"
import ExpenseList from "./components/ExpenseList"

function App() {
  const [budget, setBudget] = useState(0)

  return (
    <div className="bg-gray-200 min-h-screen">
      <h1 className="bg-blue-600 text-white uppercase text-4xl font-semibold py-8 text-center">
        Planificador de Gastos
      </h1>

      {
        budget > 0 ? (
          <>
            <div className="space-y-10 py-10">
              <BudgetTracker />
              <ExpenseFilter />
              <ExpenseList />
            </div>

            <ExpenseDialog
              dialogOptions={{ title: "Nuevo Gasto", buttonName: "Registrar Gasto" }}
            >
              <button className="fixed bottom-5 right-5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-16 h-16 text-blue-600 rounded-full">
                  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z" clipRule="evenodd">
                  </path>
                </svg>
              </button>
            </ExpenseDialog >
          </>
        ) : (
          <BudgetForm
            setBudget={setBudget}
          />
        )
      }
    </div >
  )
}

export default App
