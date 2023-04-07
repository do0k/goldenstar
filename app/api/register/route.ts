import prisma from "@/app/libs/prismadb"
import bcrypt from "bcrypt"
import { NextResponse } from "next/server"

const POST = async (request: Request) => {
	const body = await request.json()

	const { username, password, role, name } = body

	const hashedPassword = await bcrypt.hashSync(password, 12)

	const user = await prisma.user.create({
		data: {
			role,
			username,
			name,
			password: hashedPassword,
		},
	})

	return NextResponse.json(user)
}

export { POST }
