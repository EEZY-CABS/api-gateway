import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { LoginResponse } from './interfaces/responses.interface';
import { LoginDto } from './dto/login.dto';

@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  @Post('auth/login')
  @UsePipes(new ValidationPipe({ transform: true }))
  async UserLogin(@Body() body: LoginDto ):Promise<LoginResponse>{
    
  }

  @Post('auth/refresh-token')

  @Get('auth/logout')

  @Post('auth/check-reg-process')

  @Post('auth/start-reg')

  @Post('auth/resend-otp')

  @Post('auth/verify-reg')

  @Get('auth/delete-reg-process')
  

}
