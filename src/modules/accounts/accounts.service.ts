import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AccountsService {
     async userLogout(data : LoginDto):Promise<>{}
}