import ExpenseDialogUpdate from "./ExpenseDialogUpdate"

const expenseList = [
  {
    id: "abc123",
    category: "ahorro",
    name: "gasto ahorro",
    quantity: 12,
    date: "lunes, 29 de abril de 2024",
  },
  {
    id: "def456",
    category: "casa",
    name: "gasto casa",
    quantity: 21,
    date: "lunes, 30 de abril de 2024",
  }
]

function ExpenseItem({ expense, updateExpense, deleteExpense }) {
  const { category, name, quantity, date } = expense
  return (
    <div className="flex justify-between items-center gap-5">
      <div className="flex items-center gap-5">
        <img src={`/icono_${category}.svg`} alt="ahorro" className="w-20" />
        <div className="space-y-2">
          <p className="uppercase text-gray-500 font-semibold text-sm">
            {category}
          </p>
          <p>
            {name}
          </p>
          <p className="text-sm text-gray-500">
            {date}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-1 justify-between items-stretch w-20">
        <p className="text-2xl font-semibold text-center">
          ${quantity.toFixed(2)}
        </p>

        <button
          className="bg-rose-600 text-white text-center font-semibold cursor-pointer rounded-md"
          onClick={() => deleteExpense(expense.id)}
        >
          Delete
        </button>
        <ExpenseDialogUpdate
          expense={expense}
          updateExpense={updateExpense}
        />
      </div>
    </div>
  )
}

export default function ExpenseList({ expenses, updateExpense, deleteExpense }) {
  return (
    <section className="px-10 py-10 bg-white max-w-3xl mx-auto space-y-10">
      {
        expenses.length === 0 ? (
          <h2 className="text-gray-600 font-semibold text-2xl">
            No hay gastos aún
          </h2>
        ) : (
          <h2 className="text-gray-600 font-semibold text-2xl">
            Listado de Gastos
          </h2>
        )
      }

      {
        expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            expense={expense}
            updateExpense={updateExpense}
            deleteExpense={deleteExpense}
          />
        ))
      }


    </section>
  )
}