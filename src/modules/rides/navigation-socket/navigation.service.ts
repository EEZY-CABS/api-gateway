import { Injectable } from '@nestjs/common';
import { CreateNavigationDto } from './dto/create-navigation.dto';
import { UpdateNavigationDto } from './dto/update-navigation.dto';

@Injectable()
export class NavigationService {
  create(createNavigationDto: CreateNavigationDto) {
    return 'This action adds a new navigation';
  }

  findAll() {
    return `This action returns all navigation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} navigation`;
  }

  update(id: number, updateNavigationDto: UpdateNavigationDto) {
    return `This action updates a #${id} navigation`;
  }

  remove(id: number) {
    return `This action removes a #${id} navigation`;
  }
}
