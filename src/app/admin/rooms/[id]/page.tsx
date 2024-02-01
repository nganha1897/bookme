import Home from "@/components/Home";
import Error from "@/app/error";
import { getAuthHeader } from "@/helpers/authHeader";
import AllRooms from "@/components/admin/AllRooms";
import UpdateRoom from "@/components/admin/UpdateRoom";

export const metadata = {
  title: 'Update Rooms - ADMIN',
};

const getRooms = async (id: string) => {
  const authHeaders = getAuthHeader();

  const res = await fetch(`${process.env.API_URL}/api/rooms/${id}`, {headers: authHeaders.headers});
  return res.json();
}

export default async function AdminUpdateRoomPage({ params }: { params: { id: string } }) {
  const data = await getRooms(params?.id);
  if (data?.errMessage) {
    return <Error error={data} />
  }

  return (
    <UpdateRoom data={data} />
  );
}