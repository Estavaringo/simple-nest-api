import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class WeatherService {
  getWeather(): string {
    return fs.readFileSync(path.resolve('src/service/weather/mockdata.json')).toString();
  }
}
