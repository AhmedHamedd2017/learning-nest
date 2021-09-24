import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from 'src/services/cats.service';

@Module({
  imports: [],
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {}
