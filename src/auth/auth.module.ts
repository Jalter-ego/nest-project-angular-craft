import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt'; // Importa el JwtModule
import { UsersService } from 'src/users/users.service';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'your-secret-key', // Usa una clave secreta para firmar el JWT
      signOptions: { expiresIn: '1h' }, // Opcional, ajusta el tiempo de expiración del JWT
    }),
    UsersModule
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
