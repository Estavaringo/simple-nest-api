import { Test, TestingModule } from '@nestjs/testing';
import { WeatherController } from './weather.controller';
import { WeatherService } from '../weather.service';
import * as fs from 'fs';
import * as path from 'path';

describe('WeatherController', () => {
  let controller: WeatherController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WeatherController],
      providers: [WeatherService]
    }).compile();

    controller = module.get<WeatherController>(WeatherController);
  });

  describe('Weather Controller', () => {
    it('should return weather data', () => {
      expect(controller.getWeather()).toBe(fs.readFileSync(path.resolve('src/service/weather/mockdata.json')).toString());
    });
  });
});
