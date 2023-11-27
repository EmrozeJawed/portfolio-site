import { NextResponse } from "next/server";
import { Resend } from "resend";



// After (replace "your_actual_api_key" with the correct API key)
const resendInstance = new Resend(re_UeiF1U2a_Jkvw5thsGHTmaf2jkERTJhfG);

const resend = new Resend(process.env.RESEND_API_KEY=re_UeiF1U2a_Jkvw5thsGHTmaf2jkERTJhfG);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: [fromEmail, email],
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting us!</p>
          <p>New message submitted:</p>
          <p>{message}</p>
        </>
      ),
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}