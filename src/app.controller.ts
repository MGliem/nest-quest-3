import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './entities/user.model';
import { FilterService } from './filter/filter.service';

@Controller('/hello')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly filterService: FilterService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  getFilterHello(@Body() body: User[], @Query('name') name: string): User[] {
    return this.filterService.filterUsers(body, name);
  }
}
