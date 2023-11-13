
import {NextResponse} from 'next/server'
import users from '@/models/users'
import {connectDB} from '@/utils/connectDB'

connectDB()

export async function GET(){      
    console.log("Obteniendo todos los Usuarios...")
    const user = await users.find()
    return NextResponse.json(user)
}

export async function POST(request){

    try {
        const data = await request.json()
        console.log("data>>>",data)
        const newUser = new users(data)        
        console.log("newEdificio>>>",newUser)
        const saveUser = await newUser.save()
        console.log("Agregando nuevo usuario...")
        console.log(saveUser)
        return NextResponse.json(saveUser)        
        
    } catch (error) {
        return NextResponse.error(error.message, {status: 400})        
    }
}