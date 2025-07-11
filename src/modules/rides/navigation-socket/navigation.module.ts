import { Module } from '@nestjs/common';
import { NavigationService } from './navigation.service';
import { NavigationGateway } from './navigation.gateway';

@Module({
  providers: [NavigationGateway, NavigationService],
})
export class NavigationModule {}
