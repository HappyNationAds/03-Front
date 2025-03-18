// /pages/404.js
export default function NotFound() {
  return (
    <div className="flex flex-col gap-10 justify-center items-center h-screen bg-gradient-to-r from-purple-800 to-pink-900">
      <img src="/logo.png" alt="logo" className="h-20 w-auto" />
      <div className="text-center p-10 bg-neutral-200 rounded-lg shadow-xl max-w-sm w-[90%]">
        <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
          Oops!
        </h1>
        <p className="mt-4 text-2xl text-black">
          A página que você está procurando não existe.
        </p>
        <div className="mt-6">
          <svg
            className="w-16 h-16 mx-auto text-gray-400 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M14 12l-2-2-2 2" />
          </svg>
        </div>
      </div>
    </div>
  );
}
