export default function BudgetTracker() {
  return (
    <div className="px-10 py-10 grid grid-cols-2 gap-5 bg-white shadow-lg w-full max-w-3xl mx-auto">
      <div className="col-span-2 bg-gray-300 flex justify-center items-center text-sky-600 text-2xl
      md:col-span-1">
        0% Gastado
      </div>

      <div className="col-span-2 space-y-8
      md:col-span-1">
        <button className="bg-pink-600 text-white uppercase py-2 text-center w-full rounded-md font-semibold">
          Resetear App
        </button>

        <p className="text-center font-semibold text-blue-600 text-2xl">
          Presupuesto:
          <span className="ml-1 text-black">
            $2.00
          </span>
        </p>

        <p className="text-center font-semibold text-blue-600 text-2xl">
          Disponible:
          <span className="ml-1 text-black">
            $ 2.00
          </span>
        </p>

        <p className="text-center font-semibold text-blue-600 text-2xl">
          Gastado:
          <span className="ml-1 text-black">
            $ 0.00
          </span>
        </p>
      </div>
    </div>
  )
}