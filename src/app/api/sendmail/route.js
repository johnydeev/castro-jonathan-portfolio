import { NextResponse } from 'next/server';
import transporter from '@/utils/sendEmail'
// import { promises as fs } from 'fs';

export async function POST(request){
    const {name,email} = await request.json()  
    console.log("name>>>",name)
    console.log("email>>>",email)
    // console.log("message>>>",message)
    // console.log("mailOptions>>>",mailOptions)
    // await fs.writeFile('./promesas.txt', 'Hola mundo con promesas')
    // await fs.appendFile('./promesas.txt', 'Como estas??')
    // const response = await fs.readFile('./promesas.txt', 'utf-8')
    // console.log("response>>>",response)
    // await fs.unlink('./promesas.txt')
    try {
        if(!name || !email){
            return NextResponse.json({message:"Faltan datos"})
        }
        const response = await transporter.sendMail({
            from:"mensaje enviado por <>",
            to:Gmail,
            subject:"Johnnydeev",
            text: `Hola ${name}, Agradezco enormemente por confiar en mi APP que hice con mucho esfuerzo y cariño, en breve estare en contacto para hablar acerca de tu propuesta. Gracias!`,
            attachments:{                
                // path: attachment,
                path: "C:/Users/jony/Desktop/Repos/castro-jonathan-portfolio/public/CV Jonathan Castro - Desarrollador Full Stack.pdf", 
                contentType: 'application/pdf',              
            },
        })
        console.log("envio exitoso",response)
        return NextResponse.json('successful shipment')
        
    } catch (error) {
        console.log("errorRoute>>>",error)
        return NextResponse.json(error)
    }
}