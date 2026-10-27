import { NextResponse } from "next/server";

const DIRECT_DOWNLOAD_URL =
  "https://sourceforge.net/projects/jamroom/files/JamRoomV1.7.0.apk/download";

export async function GET() {
  return NextResponse.redirect(DIRECT_DOWNLOAD_URL, 302);
}
