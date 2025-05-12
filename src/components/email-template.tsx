import * as React from "react";

interface EmailTemplateProps {
  Otp: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  Otp,
}) => (
  <div>
    <h1>Your OTP is : {Otp}</h1>
    <p>this otp will expire in 10 minutes</p>
  </div>
);

export default EmailTemplate;
