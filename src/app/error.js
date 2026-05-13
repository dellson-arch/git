"use client"

export default function Error({
  error,
  reset,
}) {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold">
        Something went wrong!
      </h2>

      <button
        onClick={() => reset()}
        className="mt-4 bg-black text-white px-4 py-2 rounded"
      >
        Try again
      </button>
    </div>
  )
}