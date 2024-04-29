const expenseOptions = [
  {
    id: 0,
    name: "-- Todas las Categorías --",
    value: ""
  },
  {
    id: 1,
    name: "Ahorro",
    value: "ahorro"
  },
  {
    id: 2,
    name: "Comida",
    value: "comida"
  },
  {
    id: 3,
    name: "Casa",
    value: "casa"
  },
  {
    id: 4,
    name: "GastosVarios",
    value: "gastosvarios"
  },
  {
    id: 5,
    name: "Ocio",
    value: "ocio"
  },
  {
    id: 6,
    name: "Salud",
    value: "salud"
  },
  {
    id: 7,
    name: "Suscripciones",
    value: "suscripciones"
  },
]

export default function ExpenseFilter() {
  return (
    <section className="px-10 py-10 bg-white max-w-3xl mx-auto rounded-md shadow-lg">
      <div className="flex gap-5 flex-col
      md:flex-row md:items-center">
        <label htmlFor="expenseFilter" className="">
          Filtrar Gastos
        </label>
        <select name="expenseFilter" id="expenseFilter"
          className="px-2 py-3 bg-gray-200 rounded-md flex-1"
        >
          {expenseOptions.map((option) => (
            <option key={option.id} value={option.value} className="text-sm">
              {option.name}
            </option>
          ))}
        </select>
      </div>
    </section>
  )
}