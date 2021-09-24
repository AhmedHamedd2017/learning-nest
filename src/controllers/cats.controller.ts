import { Body, Controller, Get, Post } from '@nestjs/common';
import { CatsService } from 'src/services/cats.service';
@Controller('cats')
export class CatsController {
  constructor(private readonly CatsService: CatsService) {}

  @Get()
  getList(): [] {
    return this.CatsService.getList();
  }

  @Post()
  addCat(@Body() createCatInput: { name; age }): boolean {
    return this.CatsService.addCat(createCatInput);
  }
}
