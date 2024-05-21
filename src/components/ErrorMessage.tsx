interface ErrorMessageProps {
  children: React.ReactNode
}

export default function ErrorMessage({ children }: ErrorMessageProps) {
  return (
    <p className="bg-rose-600 text-white text-center py-2 rounded-md font-semibold">
      {children}
    </p>
  )
}