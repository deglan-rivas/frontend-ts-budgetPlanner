import { cn } from "@/lib/utils";

export default function BudgetTracker({ resetApp, budget, totalExpenses, availableBudget }) {
  return (
    <div className="px-10 py-10 grid grid-cols-2 gap-5 bg-white shadow-lg w-full max-w-3xl mx-auto">
      <div
        className={cn("col-span-2 bg-gray-300 flex justify-center items-center text-sky-600 text-2xl h-60   md:col-span-1 md:h-auto",
          totalExpenses === budget && "text-rose-600")}
      >
        {(totalExpenses / budget * 100).toFixed(2)}% Gastado
      </div>

      <div className="col-span-2 space-y-8
      md:col-span-1">
        <button
          className="bg-pink-600 text-white uppercase py-2 text-center w-full rounded-md font-semibold"
          onClick={() => resetApp()}
        >
          Resetear App
        </button>

        <p className="text-center font-semibold text-blue-600 text-2xl">
          Presupuesto:
          <span className="ml-2 text-black">
            ${budget.toFixed(2)}
          </span>
        </p>

        <p className={cn("text-center font-semibold text-blue-600 text-2xl",
          totalExpenses === budget && "text-rose-600")}>
          Disponible:
          <span className={cn("ml-2 text-black",
            totalExpenses === budget && "text-rose-600")}>
            ${availableBudget.toFixed(2)}
          </span>
        </p>

        <p className="text-center font-semibold text-blue-600 text-2xl">
          Gastado:
          <span className="ml-2 text-black">
            ${totalExpenses.toFixed(2)}
          </span>
        </p>
      </div>
    </div>
  )
}