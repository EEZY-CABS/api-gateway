import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { NavigationService } from './navigation.service';
import { CreateNavigationDto } from './dto/create-navigation.dto';
import { UpdateNavigationDto } from './dto/update-navigation.dto';

@WebSocketGateway()
export class NavigationGateway {
  constructor(private readonly navigationService: NavigationService) {}

  @SubscribeMessage('createNavigation')
  create(@MessageBody() createNavigationDto: CreateNavigationDto) {
    return this.navigationService.create(createNavigationDto);
  }

  @SubscribeMessage('findAllNavigation')
  findAll() {
    return this.navigationService.findAll();
  }

  @SubscribeMessage('findOneNavigation')
  findOne(@MessageBody() id: number) {
    return this.navigationService.findOne(id);
  }

  @SubscribeMessage('updateNavigation')
  update(@MessageBody() updateNavigationDto: UpdateNavigationDto) {
    return this.navigationService.update(updateNavigationDto.id, updateNavigationDto);
  }

  @SubscribeMessage('removeNavigation')
  remove(@MessageBody() id: number) {
    return this.navigationService.remove(id);
  }
}
