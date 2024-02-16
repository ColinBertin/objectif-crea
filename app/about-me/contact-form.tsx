"use client";

export default function ContactForm() {
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("Send Email");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="space-y-8 text-start">
        <div>
          <label className="block mb-2 text-sm font-medium text-white">
            Vorte Email
          </label>
          <input
            type="email"
            id="email"
            className="shadow-sm bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-300 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            placeholder="name@example.com"
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-white">
            Sujet
          </label>
          <input
            type="text"
            id="subject"
            className="block p-3 w-full text-sm bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-300 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            placeholder="Faite-moi savoir comment puis-je vous aider"
            required
          />
        </div>
        <div className="sm:col-span-2">
          <label className="block mb-2 text-sm font-medium text-white">
            Votre message
          </label>
          <textarea
            id="message"
            rows={6}
            className="block p-2.5 w-full text-sm bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-300 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Laissez-moi un message..."
          ></textarea>
        </div>
      </div>
      <button
        type="submit"
        className="py-3 px-5 text-sm font-medium text-center text-white transition ease-in-out duration-200 transform rounded-lg bg-gray-200 sm:w-fit hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
      >
        Envoyer
      </button>
    </form>
  );
}
