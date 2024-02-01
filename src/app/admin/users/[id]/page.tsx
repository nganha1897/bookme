import Error from "@/app/error";
import { getAuthHeader } from "@/helpers/authHeader";
import UpdateUser from "@/components/admin/UpdateUser";

export const metadata = {
  title: 'Update User - ADMIN',
};

interface Props {
  params: { id: string };
}
const getUser = async (id: String) => {
  const authHeaders = getAuthHeader();

  const res = await fetch(`${process.env.API_URL}/api/admin/users/${id}`, {
    headers: authHeaders.headers, 
    next: {
      tags: ["UserDetails"]
    }
  });
  return res.json();
}

export default async function UpdateAdminUserPage({ params }: Props) {
  const data = await getUser(params?.id);
  if (data?.errMessage) {
    return <Error error={data} />
  }

  return (
    <UpdateUser data={data} />
  );
}