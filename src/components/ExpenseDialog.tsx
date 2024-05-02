import {
  Dialog,
  DialogContent,
  DialogTrigger
} from "@/components/ui/dialog";
import { expenseOptions } from "@/data/expenseOptions";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import ErrorMessage from "./ErrorMessage";

export default function ExpenseDialog({ children, dialogOptions, expense, setExpense, initialExpense, addExpense, availableBudget }) {
  const { title, buttonName } = dialogOptions
  const { category, name, quantity, date } = expense
  const [errorMessage, setErrorMessage] = useState("")
  const [isOpen, setIsOpen] = useState(false)

  const handleChange = (e): void => {
    setExpense({
      ...expense,
      [e.target.id]: e.target.value
    })
  }

  const handleChangeInt = (e): void => {
    setExpense({
      ...expense,
      [e.target.id]: +e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // setIsOpen(true)

    if (Object.values(expense).some(value => !!value == false)) {
      setErrorMessage("Todos los campos son obligatorios")
      return
    }

    if (expense.quantity > availableBudget) {
      setErrorMessage(`El presupuesto disponible es ${availableBudget.toFixed(2)}`)
      return
    }

    addExpense({ ...expense, id: uuidv4() })
    setExpense(initialExpense)
    setErrorMessage("")
    setIsOpen(false)
  }

  // const openCloseModal = () => {
  const openCloseModal = (isShadcnModalOpen: boolean) => {
    // setIsOpen(!isOpen)
    setIsOpen(isShadcnModalOpen)
    // console.log(isShadcnModalOpen)
    setErrorMessage("")
  }

  return (
    // <Dialog open={isOpen} onOpenChange={a => console.log(a)}>
    <Dialog open={isOpen} onOpenChange={openCloseModal}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="mx-auto w-[92%] rounded-lg
      md:max-w-3xl" >
        <form action="" className="w-full space-y-5" onSubmit={(e) => handleSubmit(e)}>
          <h2 className="text-center font-semibold uppercase text-2xl border-b-4 border-b-sky-600 py-2">
            {title}
          </h2>

          {
            errorMessage !== "" && (
              <ErrorMessage>
                {errorMessage}
              </ErrorMessage>
            )
          }

          <div className="space-y-2">
            <label htmlFor="name" className="text-xl">
              Nombre Gasto:
            </label>
            <input
              type="text"
              id="name"
              placeholder="Añade el nombre del gasto"
              className="px-2 py-2 bg-gray-100 w-full"
              value={name}
              onChange={(e) => handleChange(e)}
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
              min={0}
              value={quantity}
              onChange={(e) => handleChangeInt(e)}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="category" className="text-xl">
              Categoría:
            </label>
            <select name="expenseFilter" id="category"
              className="px-2 py-3 bg-gray-100 rounded-md block w-full"
              value={category}
              onChange={(e) => handleChange(e)}
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
              value={date}
              onChange={(e) => handleChange(e)}
            />
          </div>

          {/* <DialogClose asChild> */}
          <input
            type="submit"
            value={buttonName}
            className="bg-blue-600 text-white uppercase py-2 text-center w-full font-semibold rounded-md"
          />
          {/* </DialogClose> */}
        </form>
      </DialogContent>
    </Dialog>
  )
}