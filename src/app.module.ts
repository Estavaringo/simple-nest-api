import { Module } from '@nestjs/common';
import { HelloController } from './service/hello/apihello/hello.controller';
import { HelloService } from './service/hello/hello.service';
import { WeatherController } from './service/weather/apiweather/weather.controller';
import { WeatherService } from './service/weather/weather.service';

@Module({
  imports: [],
  controllers: [HelloController, WeatherController],
  providers: [HelloService, WeatherService],
})
export class AppModule {}
