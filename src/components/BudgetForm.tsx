import { useState } from "react"

export default function BudgetForm({ setBudget }) {
  const [preBudget, setPreBudget] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()
    setBudget(preBudget)
  }

  return (
    <section className="">
      <div className="bg-white shadow-lg rounded-md p-10 max-w-3xl mx-auto mt-10">
        <h2 className="text-blue-600 text-4xl font-semibold text-center mb-5">
          Definir Presupuesto
        </h2>

        <form action="" className="space-y-5"
          onSubmit={(e) => handleSubmit(e)}
        >
          <input
            type="number"
            name="budget"
            min={0}
            id=""
            className="w-full border border-gray-300 px-2 py-2"
            onChange={e => setPreBudget(+e.target.value)}
          />
          <input
            type="submit"
            value={"Definir Presupuesto"}
            className="uppercase bg-blue-600 text-white py-2 text-center w-full font-semibold cursor-pointer
            disabled:bg-gray-400"
            disabled={preBudget <= 0 ? true : false}
          />
        </form>
      </div>
    </section>
  )
}