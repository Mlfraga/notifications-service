import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from '../app.service';
import { PrismaService } from './prisma.service';
import { randomUUID } from 'node:crypto';
import { CreatedNotificationBody } from './create-notification-body';

@Controller('notification')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly prismaService: PrismaService,
  ) {}

  @Get()
  async list() {
    const notifications = await this.prismaService.notification.findMany();

    return notifications;
  }

  @Post()
  async create(@Body() body: CreatedNotificationBody) {
    const createdNotification = await this.prismaService.notification.create({
      data: {
        ...body,
        id: randomUUID(),
      },
    });

    return createdNotification;
  }
}
