import { expenseOptions } from "@/data/expenseOptions";


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