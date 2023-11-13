import { NextResponse } from "next/server";
import {connectDB} from "src/utils/connectDB";

connectDB()

export function GET() {

    return NextResponse.json({
        message: 'Hello from the API'
    })

}   