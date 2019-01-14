import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getQuery(@Query() query) {
    const sql = query.sql;
    return this.appService.ejecutarQuery(sql);
  }
}
