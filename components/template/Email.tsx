import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  subject,
  message,
}) => (
  <div>
    <h1>{subject}</h1>
    <h3>From: {name}</h3>
    <h3>Email: {email}</h3>
    <p>{message}</p>
  </div>
);
