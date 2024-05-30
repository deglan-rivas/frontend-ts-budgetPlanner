import {
  Dialog,
  DialogContent,
  DialogTrigger
} from "@/components/ui/dialog"
import { expenseOptions } from "@/data/expenseOptions"
import useBudget from "@/hooks/useBudget"
import { Expense } from "@/types"
import { useState } from "react"
import ErrorMessage from "./ErrorMessage"

interface ExpenseDialogUpdateProps {
  expense: Expense
}

// TODO muy raro esto de cambiar el isUpdateModal por un isOpen local con useState, quizás es porque así cada componente tiene su propio update dialog, pero bueno al final funcionó así y no usando el modal con estado global
export default function ExpenseDialogUpdate({ expense }: ExpenseDialogUpdateProps) {
  const { availableBudget, dispatch } = useBudget()
  // const { isUpdateModal, currentExpense } = state
  // console.log(currentExpense)
  const [updatedExpense, setUpdatedExpense] = useState(expense)
  const upperLimit = availableBudget + expense.quantity
  // dispatch({ type: "update-current-expense", payload: { expense: expense } })

  // console.log(currentExpense)
  // console.log(updatedExpense)
  const { category, name, quantity, date } = updatedExpense
  const [errorMessage, setErrorMessage] = useState("")
  const [isOpen, setIsOpen] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
    setUpdatedExpense({
      ...updatedExpense,
      [e.target.id]: e.target.value
    })
  }

  const handleChangeInt = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setUpdatedExpense({
      ...updatedExpense,
      [e.target.id]: +e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (Object.values(updatedExpense).some(value => !!value == false)) {
      setErrorMessage("Todos los campos son obligatorios")
      return
    }

    if (updatedExpense.quantity > upperLimit) {
      setErrorMessage(`El presupuesto disponible es ${(upperLimit).toFixed(2)}`)
      return
    }

    dispatch({ type: 'update-expense', payload: { updatedExpense: updatedExpense } })
    setErrorMessage("")
    setIsOpen(false)
    // dispatch({ type: 'change-update-modal', payload: { isOpen: false, currentExpense: expense } })
  }

  const openCloseModal = (isShadcnModalOpen: boolean) => {
    // TODO aquí actualizar mi currentExpense por el expense del item solo cuando se abre, osea, en true xd
    // if (isShadcnModalOpen) {
    //   dispatch({ type: "update-current-expense", payload: { expense: expense } })
    // }
    setIsOpen(isShadcnModalOpen)
    // dispatch({ type: 'change-update-modal', payload: { isOpen: isShadcnModalOpen, currentExpense: expense } })
    setErrorMessage("")
  }

  return (
    <Dialog open={isOpen} onOpenChange={openCloseModal}>
      <DialogTrigger asChild>
        <button className="bg-blue-600 text-white text-center font-semibold cursor-pointer rounded-md">
          Update
        </button>
      </DialogTrigger>
      <DialogContent className="mx-auto w-[92%] rounded-lg
      md:max-w-3xl">
        <form action="" className="w-full space-y-5" onSubmit={(e) => handleSubmit(e)}>
          <h2 className="text-center font-semibold uppercase text-2xl border-b-4 border-b-sky-600 py-2">
            Actualizar Gasto
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
            value={"Guardar Cambios"}
            className="bg-blue-600 text-white uppercase py-2 text-center w-full font-semibold rounded-md"
          />
          {/* </DialogClose> */}
        </form>
      </DialogContent>
    </Dialog>
  )
}