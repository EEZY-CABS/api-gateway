import { PartialType } from '@nestjs/mapped-types';
import { CreateRidesSocketDto } from './create-rides-socket.dto';

export class UpdateRidesSocketDto extends PartialType(CreateRidesSocketDto) {
  id: number;
}
