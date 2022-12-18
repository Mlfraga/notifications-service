import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './infra/app.controller';
import { HttpModule } from './infra/http.module';
import { PrismaService } from './infra/prisma.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
