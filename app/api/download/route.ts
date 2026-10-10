import { NextResponse } from "next/server";

const DIRECT_DOWNLOAD_URL =
  "https://drive.google.com/file/d/19sNSnCmiwo9Ez-EVUFMeiJTTIrDxr4iH/view?usp=drive_link";

export async function GET() {
  return NextResponse.redirect(DIRECT_DOWNLOAD_URL, 302);
}
