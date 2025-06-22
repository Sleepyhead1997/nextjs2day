import {  NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient

export async function DELETE(req: NextRequest, { params }: {
    params: Promise<{
        id:string
    }>
}) {
    try {
    const {id} = await params;
      await prisma.product.delete({
        where: { 
            id: parseInt(id)
         },
      });
  
      return NextResponse.json({ message: 'Deleted' });
    } catch (err) {
      console.error(err);
      return NextResponse.json({ message: 'Error', error: String(err) }, { status: 500 });
    }
  }
 

