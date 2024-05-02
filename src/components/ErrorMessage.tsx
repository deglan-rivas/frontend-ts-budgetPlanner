export default function ErrorMessage({ children }) {
  return (
    <p className="bg-rose-600 text-white text-center py-2 rounded-md font-semibold">
      {children}
    </p>
  )
}