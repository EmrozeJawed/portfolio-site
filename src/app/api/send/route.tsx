// Import necessary types from next/server
import { NextResponse, NextRequest, } from "next/server";

// Import Resend type from "resend"
import { Resend } from "resend";

// Ensure that RESEND_API_KEY is set in your environment
const resendApiKey: string | undefined = process.env.RESEND_API_KEY;

if (!resendApiKey) {
  throw new Error("Missing RESEND_API_KEY in the environment");
}

const resend = new Resend(resendApiKey);
const fromEmail: string | undefined = process.env.FROM_EMAIL;

// Update the function signature to include types for req and res
export default async function handler(
  req: NextRequest,
  res: NextResponse
): Promise<void> {
  const { email, subject, message } = await req.json();

  console.log(email, subject, message);

  if (fromEmail) {
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
      console.log(data, '/see')
  
      // Return a NextResponse with the JSON data
      // return NextResponse.json(data);
    } catch (error) {
      console.log(error, '/see')
      // Return a NextResponse with the error
      // return NextResponse.json({ error });
    }
  }
}
