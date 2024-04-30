import {
  Dialog,
  DialogContent,
  DialogTrigger
} from "@/components/ui/dialog"
import { expenseOptions } from "@/data/expenseOptions"

export default function ExpenseDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="fixed bottom-5 right-5">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-16 h-16 text-blue-600 rounded-full">
            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z" clipRule="evenodd">
            </path>
          </svg>
        </button>
      </DialogTrigger>
      <DialogContent className="mx-auto w-[92%] rounded-lg
      md:max-w-3xl">
        <form action="" className="w-full space-y-5">
          <h2 className="text-center font-semibold uppercase text-2xl border-b-4 border-b-sky-600 py-2">
            Nuevo Gasto
          </h2>

          <div className="space-y-2">
            <label htmlFor="name" className="text-xl">
              Nombre Gasto:
            </label>
            <input
              type="text"
              id="name"
              placeholder="Añade el nombre del gasto"
              className="px-2 py-2 bg-gray-100 w-full"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="quantity" className="text-xl">
              Cantidad:
            </label>
            <input
              type="number"
              id="quantity"
              className="px-2 py-2 bg-gray-100 w-full"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="category" className="text-xl">
              Categoría:
            </label>
            <select name="expenseFilter" id="category"
              className="px-2 py-3 bg-gray-100 rounded-md block w-full"
            >
              {expenseOptions.map((option) => (
                <option key={option.id} value={option.value} className="text-sm">
                  {option.name}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="date" className="text-xl">
              Fecha Gasto:
            </label>
            <input
              type="text"
              id="date"
              placeholder="Añade el nombre del gasto"
              className="px-2 py-2 bg-gray-100 w-full"
            />
          </div>

          <input
            type="submit"
            value="Registrar Gasto"
            className="bg-blue-600 text-white uppercase py-2 text-center w-full font-semibold rounded-md"
          />
        </form>
      </DialogContent>
    </Dialog>
  )
}