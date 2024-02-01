import ResetPassword from '@/components/user/ResetPassword';
import React from 'react'

export const metadata = {
  title: "Reset Password"
}

interface Props {
  params: { token: string };
}

const ResetPasswordPage = ({ params }: Props) => {
  return (
    <ResetPassword token={params?.token} />
  )
};

export default ResetPasswordPage;