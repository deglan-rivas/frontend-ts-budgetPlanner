import BudgetTracker from "./components/BudgetTracker"
import ExpenseDialog from "./components/ExpenseDialog"
import ExpenseFilter from "./components/ExpenseFilter"
import ExpenseList from "./components/ExpenseList"

function App() {
  return (
    <div className="bg-gray-200">
      <h1 className="bg-blue-600 text-white uppercase text-4xl font-semibold py-8 text-center">
        Planificador de Gastos
      </h1>

      {/* <BudgetForm /> */}

      <div className="space-y-10 py-10">
        <BudgetTracker />
        <ExpenseFilter />
        <ExpenseList />
      </div>

      <ExpenseDialog />
    </div >
  )
}

export default App
