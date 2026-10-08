import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  // Direct redirect to the locally hosted APK file
  const downloadUrl = new URL("/jam-room.apk", request.url);
  return NextResponse.redirect(downloadUrl, 302);
}
