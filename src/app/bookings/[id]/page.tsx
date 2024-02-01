import Home from "@/components/Home";
import Error from "@/app/error";
import { getAuthHeader } from "@/helpers/authHeader";
import BookingDetails from "@/components/booking/BookingDetails";

export const metadata = {
  title: 'My Booking Details',
};

const getBooking = async (id: string) => {
  const authHeader = getAuthHeader();
  
  const res = await fetch(`${process.env.API_URL}/api/bookings/${id}`, authHeader);
  return res.json();
}

export default async function MyBookingPage({ params }: { params: { id: string }}) {
  const data = await getBooking(params?.id);

  if (data?.errMessage) {
    return <Error error={data} />
  }

  return (
    <BookingDetails data={data} />
  );
}
