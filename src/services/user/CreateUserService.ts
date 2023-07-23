import prismaClient from "../../prisma";
import { hash } from "bcryptjs";

interface UserRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  async execute({ name, email, password }: UserRequest) {
    //Verificar se o email foi enviado
    if (!email) {
      throw new Error("Email Incorrect");
    }

    //Verificar se esse email já está cadastrado
    const userAlreadyExists = await prismaClient.user.findFirst({
      where: {
        email: email,
      },
    });

    if (userAlreadyExists) {
      throw new Error("User already exists");
    }
    
    //Senha criptografada, 8 digitos
    const passwordHash = await hash(password, 8)

    const user = await prismaClient.user.create({
      data: {
        name: name,
        email: email,
        password: passwordHash,
      },
      //Serve para filtrar aquilo que deseja retornar
      select:{
        id: true,
        name: true,
        email: true
      }
    });
    return user;
  }
}

export { CreateUserService };
