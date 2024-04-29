import BudgetForm from "./components/BudgetForm"

function App() {
  return (
    <div className="min-h-screen bg-gray-200">
      <h1 className="bg-blue-600 text-white uppercase text-4xl font-semibold py-8 text-center">
        Planificador de Gastos
      </h1>

      <BudgetForm />
    </div>
  )
}

export default App
