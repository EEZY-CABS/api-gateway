import { Injectable } from '@nestjs/common';
import { CreateRidesSocketDto } from './dto/create-rides-socket.dto';
import { UpdateRidesSocketDto } from './dto/update-rides-socket.dto';

@Injectable()
export class RidesSocketService {
  create(createRidesSocketDto: CreateRidesSocketDto) {
    return 'This action adds a new ridesSocket';
  }

  findAll() {
    return `This action returns all ridesSocket`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ridesSocket`;
  }

  update(id: number, updateRidesSocketDto: UpdateRidesSocketDto) {
    return `This action updates a #${id} ridesSocket`;
  }

  remove(id: number) {
    return `This action removes a #${id} ridesSocket`;
  }
}
