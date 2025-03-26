import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const data = request.json();
    return NextResponse.json({ message: 'Applicant added', data }, { status: 200 });
}