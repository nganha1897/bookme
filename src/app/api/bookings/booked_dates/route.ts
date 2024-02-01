import dbConnect from '@/backend/config/dbConnect'
import { getRoomBookedDates } from '@/backend/controllers/bookingControllers';
import { isAuthenticatedUser } from '@/backend/middlewares/auth';
import { createEdgeRouter } from 'next-connect'
import { NextRequest, NextResponse } from 'next/server'

interface RequestContext {}

const router = createEdgeRouter<NextRequest, RequestContext>();

dbConnect();

router.get(getRoomBookedDates);

export async function GET(request: NextRequest, ctx: RequestContext) {
    return router.run(request, ctx) as Promise<NextResponse>;
}