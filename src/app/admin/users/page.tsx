import Error from "@/app/error";
import { getAuthHeader } from "@/helpers/authHeader";
import AllUsers from "@/components/admin/AllUsers";

export const metadata = {
  title: 'All Users - ADMIN',
};

const getUsers = async () => {
  const authHeaders = getAuthHeader();

  const res = await fetch(`${process.env.API_URL}/api/admin/users`, {
    headers: authHeaders.headers, 
    next: {
      tags: ["UserDetails"]
    }
  });
  return res.json();
}

export default async function AdminRoomsPage() {
  const data = await getUsers();
  if (data?.errMessage) {
    return <Error error={data} />
  }

  return (
    <AllUsers data={data} />
  );
}