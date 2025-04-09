import { Module } from '@nestjs/common';
import { RidesService } from './rides.service';
import { RidesController } from './rides.controller';
import { RidesSocketModule } from './rides-socket/rides-socket.module';

@Module({
  controllers: [RidesController],
  providers: [RidesService],
  imports: [RidesSocketModule],
})
export class RidesModule {}
