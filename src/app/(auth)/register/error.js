"use client"

export default function Error({
  error,
  reset,
}) {

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">

      <div className="bg-white p-8 rounded-2xl shadow-xl text-center max-w-md w-full">

        <h1 className="text-3xl font-bold text-red-500 mb-4">
          Oops!
        </h1>

        <p className="text-gray-600 mb-6">
          Something went wrong while loading the register page.
        </p>

        <button
          onClick={() => reset()}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all duration-300"
        >
          Try Again
        </button>

      </div>

    </div>
  )
}