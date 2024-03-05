import type { NextApiRequest, NextApiResponse } from 'next';
import { EmailTemplate } from '../../components/template/Email';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const send = async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, email, subject, message } = req.body;

  const { data, error } = await resend.emails.send({
    from: 'ObjectifCrea.be <onboarding@resend.dev>',
    to: [`${process.env.MAIL_ACCOUNT}`],
    subject: subject,
    react: EmailTemplate({name, email, subject, message}),
  });

  if (error) {
    return res.status(400).json(error);
  }
  res.status(200).json(data);
};


export default send;
