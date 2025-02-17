import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class CpuService {
  constructor(private powerService: PowerService) {}

  compute(number1: number, number2: number) {
    console.log(`Making some computations`);
    this.powerService.supplyPower(5);

    return number1 + number2;
  }
}
