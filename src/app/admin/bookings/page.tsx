import Error from "@/app/error";
import { getAuthHeader } from "@/helpers/authHeader";
import AllRooms from "@/components/admin/AllRooms";
import AllBookings from "@/components/admin/AllBookings";

export const metadata = {
  title: 'All Bookings - ADMIN',
};

const getBookings = async () => {
  const authHeaders = getAuthHeader();

  const res = await fetch(`${process.env.API_URL}/api/admin/bookings`, {
    headers: authHeaders.headers, 
    next: {
      tags: ["BookingDetails"]
    }
  });
  return res.json();
}

export default async function AdminBookingsPage() {
  const data = await getBookings();
  if (data?.errMessage) {
    return <Error error={data} />
  }

  return (
    <AllBookings data={data} />
  );
}