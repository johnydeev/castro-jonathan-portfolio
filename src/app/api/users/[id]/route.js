import {NextResponse} from 'next/server'
import users from '@/models/users'

export async function GET(request,{ params }) {

    try {
        const idUser = await users.findById(params.id)
        if (!idUser) {
            return NextResponse.json({
                message: `Usuario no encontrado`
            },{
                status : 404
            }) 
        }    
        return NextResponse.json(idUser);
        
    } catch (error) {

        return NextResponse.json({
            message: `Error al obtener el usuario`
        },{
            status : 400
        })
        
    }
}

export async function PUT(request,{ params }) {

    try {
        const userUpdate = await request.json();
        console.log(userUpdate)
        const userUpdated = await users.findByIdAndUpdate(params.id,userUpdate, { 
            new:true
        })
        if (!userUpdated) {
            return NextResponse.json({
                message: `Usuario no encontrado`
            },{
                status : 404
            }) 
        }  
    
        return NextResponse.json(userUpdated)
        
    } catch (error) {
        return NextResponse.json({message:"Error al actualizar usuario"},{status:400})        
    }
}

export async function DELETE(request,{ params }) {

    try {
        const userDeleted = await users.findByIdAndDelete(params.id)
        if (!userDeleted) 
            return NextResponse.json({
                message: "usuario no encontrado"
            },{
                status:404
            })
        console.log("Eliminando usuario...")
        console.log(userDeleted)
        return NextResponse.json({message:`Edificio borrado...`,userDeleted})
        
    } catch (error) {
        return NextResponse.json({message:"Error al borrar usuario"},{status:400})        
    }

}