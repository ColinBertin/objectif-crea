import { XMarkIcon } from "@heroicons/react/24/outline";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { useRef } from "react";

export default function Alert({
  response,
  closeModal,
}: {
  response: { logged: boolean; message: string };
  closeModal: () => void;
}) {
  const cancelButtonRef = useRef(null);

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {response.logged ? (
        <div
          id="alert-3"
          className="flex items-center p-4 mb-4 rounded-lg bg-green-400"
          role="alert"
        >
          <span className="sr-only">Info</span>
          <div className="mx-3 text-sm">{response.message}</div>
          <button
            ref={cancelButtonRef}
            className="inline-flex self-center rounded-md text-gray-500 hover:text-gray-700 focus:outline-none focus:ring focus:ring-gray-500 focus:ring-offset-2 print:hidden"
            type="button"
            onClick={closeModal}
          >
            <span className="sr-only">Close</span>
            <XMarkIcon aria-hidden="true" className="h-5 w-5" />
          </button>
        </div>
      ) : (
        <div
          id="alert-2"
          className="flex items-center p-4 mb-4 rounded-lg bg-red-500"
          role="alert"
        >
          <ExclamationTriangleIcon aria-hidden="true" className="h-5 w-5" />
          <span className="sr-only">Info</span>
          <div className="ml-3 text-sm font-medium">{response.message}</div>
          <button
            ref={cancelButtonRef}
            className="inline-flex self-center rounded-md text-gray-500 hover:text-gray-700 focus:outline-none focus:ring focus:ring-gray-500 focus:ring-offset-2 print:hidden"
            type="button"
            onClick={closeModal}
          >
            <span className="sr-only">Close</span>
            <XMarkIcon aria-hidden="true" className="h-5 w-5" />
          </button>
        </div>
      )}
    </div>
  );
}
