import { Module } from '@nestjs/common';
import { RidesSocketService } from './rides-socket.service';
import { RidesSocketGateway } from './rides-socket.gateway';

@Module({
  providers: [RidesSocketGateway, RidesSocketService],
})
export class RidesSocketModule {}
