import BudgetTracker from "./components/BudgetTracker"

function App() {
  return (
    <div className="min-h-screen bg-gray-200 space-y-10">
      <h1 className="bg-blue-600 text-white uppercase text-4xl font-semibold py-8 text-center">
        Planificador de Gastos
      </h1>

      {/* <BudgetForm /> */}

      <BudgetTracker />

    </div>
  )
}

export default App
