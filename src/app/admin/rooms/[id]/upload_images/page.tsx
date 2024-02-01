import Home from "@/components/Home";
import Error from "@/app/error";
import { getAuthHeader } from "@/helpers/authHeader";
import AllRooms from "@/components/admin/AllRooms";
import UpdateRoom from "@/components/admin/UpdateRoom";
import UploadRoomImages from "@/components/admin/UploadRoomImages";

export const metadata = {
  title: 'Upload Rooms - ADMIN',
};

const getRooms = async (id: string) => {
  const authHeaders = getAuthHeader();

  const res = await fetch(`${process.env.API_URL}/api/rooms/${id}`, {
    next: {
      tags: ["RoomDetails"]
    }
  });
  return res.json();
}

export default async function AdminUploadRoomImagesPage({ params }: { params: { id: string } }) {
  const data = await getRooms(params?.id);
  if (data?.errMessage) {
    return <Error error={data} />
  }

  return (
    <UploadRoomImages data={data} />
  );
}