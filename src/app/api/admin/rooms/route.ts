import dbConnect from '@/backend/config/dbConnect'
import { allAdminRooms, newRoom } from '@/backend/controllers/roomControllers'
import { authorizeRoles, isAuthenticatedUser } from '@/backend/middlewares/auth';
import { createEdgeRouter } from 'next-connect'
import { NextRequest, NextResponse } from 'next/server'

interface RequestContext {}

const router = createEdgeRouter<NextRequest, RequestContext>();

dbConnect();

router.use(isAuthenticatedUser, authorizeRoles("admin")).post(newRoom);
router.use(isAuthenticatedUser, authorizeRoles("admin")).get(allAdminRooms);

export async function POST(request: NextRequest, ctx: RequestContext) {
    return router.run(request, ctx) as Promise<NextResponse>;
}

export async function GET(request: NextRequest, ctx: RequestContext) {
    return router.run(request, ctx) as Promise<NextResponse>;
}