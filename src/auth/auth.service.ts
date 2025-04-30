import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { OAuth2Client } from 'google-auth-library';
import { LoginDto } from './auth.login.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsersService } from 'src/users/users.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private prisma: PrismaService,
    private usersService: UsersService
  ) {}

  async googleLogin(token: string) {
    const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
  
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    if (!payload) {
      throw new Error('Invalid token');
    }

    console.log(payload)

    
    const emailUser = payload.email || ''
    const userFind = await this.usersService.findOne(emailUser)
    if(!userFind){
      await this.prisma.user.create({
        data: {
          email: emailUser
        }
      })
    }else console.log("si existe el usuario");
    
    const user = {
      googleId: payload.sub,
      email: payload.email,
      name: payload.name,
      given_name: payload.given_name,
      picture: payload.picture,
      credits: userFind?.credits
    };

    const jwtToken = this.jwtService.sign(user);

    return { token: jwtToken };
  }

  async login(loginDto:LoginDto){
    const user = {
      email: 'jhademels123@gmail.com',
      name: 'jhon said',
      picture: 'https://lh3.googleusercontent.com/a/ACg8ocIOhzU8ulgMRSId7uKYqFCTYp50UK86xwQEkuE5NCsnlc2CeNQd=s96-c'
    }

    const jwtToken = this.jwtService.sign(user)
    return {token: jwtToken}
  }
}
