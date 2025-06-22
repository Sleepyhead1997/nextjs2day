import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

export async function DELETE(
  req: NextRequest,
  context: { params: { id: string } }
) {
  const id = parseInt(context.params.id); // ✅ ใช้ context.params.id

  try {
    await prisma.product.delete({
      where: { id },
    });

    return NextResponse.json({ message: 'Deleted' });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: 'Error', error: String(err) },
      { status: 500 }
    );
  }
}
