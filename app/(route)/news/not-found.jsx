export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white text-center px-4">
      <div>
        <h1 className="text-4xl font-bold text-red-600 mb-4">404 - Page Not Found</h1>
        <p className="text-lg text-gray-700 mb-6">
          Sorry, the page you are looking for does not exist.
        </p>
        <a
          href="/"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Go Home
        </a>
      </div>
    </div>
  );
}