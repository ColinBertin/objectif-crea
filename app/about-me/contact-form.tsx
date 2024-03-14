"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import Alert from "../../components/alert/Alert";

interface FormInput {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface LoginResponse {
  logged: boolean;
  message: string;
}

export default function ContactForm() {
  const [openDialog, setOpenDialog] = useState(false);
  const [response, setResponse] = useState<LoginResponse>();

  const {
    register,
    handleSubmit,
    reset,
    // formState: { errors },
  } = useForm<FormInput>({
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const handleSendMail = async (data: FormInput) => {
    try {
      const response = await axios.post("/api/sendEmail", data);

      if (response.status === 200) {
        setOpenDialog(true);
        setResponse({
          logged: true,
          message: "Votre message a bien été envoyé!",
        });
        setTimeout(() => {
          setOpenDialog(false);
        }, 5000);
        reset();
      } else {
        console.log("Error sending email. Status code: " + response.status);
      }
    } catch (error: any) {
      setOpenDialog(true);
      setResponse({
        logged: false,
        message: "une erreur s'est produite, veuillez réessayer",
      });
      setTimeout(() => {
        setOpenDialog(false);
      }, 5000);
    }
  };

  const onSubmit: SubmitHandler<FormInput> = async (formData) => {
    handleSendMail(formData);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <div className="space-y-8 text-start">
          <div>
            <label className="block mb-2 text-sm font-medium text-white">
              Nom<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              className="shadow-sm bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-300 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Adam Krings"
              {...register("name", { required: true })}
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-white">
              Email<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-300 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="name@example.com"
              {...register("email", { required: true })}
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-white">
              Sujet<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-sm bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-300 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Faite-moi savoir comment puis-je vous aider"
              {...register("subject", { required: true })}
            />
          </div>
          <div className="sm:col-span-2">
            <label className="block mb-2 text-sm font-medium text-white">
              Votre message<span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              rows={6}
              className="block p-2.5 w-full text-sm bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700"
              placeholder="Laissez-moi un message..."
              {...register("message", { required: true })}
            ></textarea>
          </div>
        </div>
        <button
          type="submit"
          className="py-3 px-5 text-sm font-medium text-center text-white transition ease-in-out duration-200 transform rounded-lg bg-gray-300 sm:w-fit hover:bg-gold-500 focus:ring-4 focus:outline-none focus:ring-primary-300"
        >
          Envoyer
        </button>
      </form>
      {openDialog && (
        <Alert
          response={response as LoginResponse}
          closeModal={() => setOpenDialog(false)}
        />
      )}
    </>
  );
}
