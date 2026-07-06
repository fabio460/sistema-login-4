type typeUsuario = {
    nome: string | null
    email: string | null
    senha: string | null
} 
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();
import { Request, Response } from 'express';


export const getUsuario = async(req: Request, res: Response) => {
    try {
        const users = await prisma.usuario.findMany();  
        res.json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ message: 'An error occurred while fetching the users' });
    }
}