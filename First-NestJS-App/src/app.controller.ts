import { Controller, Get } from '@nestjs/common';

@Controller('/app')
export class AppController {
  @Get('/hi')
  getHiThere() {
    return 'Hi there';
  }

  @Get('/bye')
  getByeThere() {
    return 'Bye there';
  }
}
