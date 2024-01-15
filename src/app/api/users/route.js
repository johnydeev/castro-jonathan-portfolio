import {NextResponse} from 'next/server'
import users from '@/models/users'
import {connectDB} from '@/utils/connectDB'

connectDB()

export async function GET(){      
    console.log("Obteniendo todos los Contactos...")
    const user = await users.find()
    return NextResponse.json(user)
}

export async function POST(request){

    try {                
        console.log("Entro al try POST")
        const data = await request.json()
        console.log("data>>>",data)
        
        // const {email} = data
        // console.log("email>>>",email)
        // const existingUser = await users.findOne({ email });
        // if (existingUser) {
        //     return NextResponse.error("El correo electrónico ya está registrado", { status: 400 });
        // }

        const newUser = new users(data)
        console.log("newContact>>>",newUser)
        const saveUser = await newUser.save()
        console.log("Agregando nuevo contacto...")
        console.log(saveUser)
        return NextResponse.json(saveUser)
        
        
        
    } catch (error) {
        return NextResponse.error(error.message, {status: 400})     
    }
    
}