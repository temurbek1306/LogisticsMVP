import { NextResponse } from 'next/server';
import { getPrisma } from '@/lib/prisma';

export async function POST(req: Request) {
  try {
    const prisma = getPrisma();
    const body = await req.json();
    const { companyName, email, cityState, phoneNumber, driversNeeded } = body;

    const newLead = await prisma.lead.create({
      data: {
        companyName,
        email,
        cityState,
        phoneNumber,
        driversNeeded
      }
    });

    return NextResponse.json({ success: true, lead: newLead }, { status: 201 });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}
