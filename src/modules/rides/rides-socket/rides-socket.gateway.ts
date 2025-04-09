import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { RidesSocketService } from './rides-socket.service';
import { CreateRidesSocketDto } from './dto/create-rides-socket.dto';
import { UpdateRidesSocketDto } from './dto/update-rides-socket.dto';

@WebSocketGateway()
export class RidesSocketGateway {
  constructor(private readonly ridesSocketService: RidesSocketService) {}

  @SubscribeMessage('createRidesSocket')
  create(@MessageBody() createRidesSocketDto: CreateRidesSocketDto) {
    return this.ridesSocketService.create(createRidesSocketDto);
  }

  @SubscribeMessage('findAllRidesSocket')
  findAll() {
    return this.ridesSocketService.findAll();
  }

  @SubscribeMessage('findOneRidesSocket')
  findOne(@MessageBody() id: number) {
    return this.ridesSocketService.findOne(id);
  }

  @SubscribeMessage('updateRidesSocket')
  update(@MessageBody() updateRidesSocketDto: UpdateRidesSocketDto) {
    return this.ridesSocketService.update(updateRidesSocketDto.id, updateRidesSocketDto);
  }

  @SubscribeMessage('removeRidesSocket')
  remove(@MessageBody() id: number) {
    return this.ridesSocketService.remove(id);
  }
}
