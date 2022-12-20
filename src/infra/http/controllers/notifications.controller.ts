import { Body, Controller, Get, Post } from '@nestjs/common';
import { SendNotification } from '@application/use-cases/send-notification';
import { CreatedNotificationBody } from '../dtos/create-notification-body';

@Controller('notification')
export class NotificationsController {
  constructor(private sendNotification: SendNotification) {}

  @Get()
  async list() {
    return [];
  }

  @Post()
  async create(@Body() body: CreatedNotificationBody) {
    const { notification } = await this.sendNotification.execute({
      category: body.category,
      content: body.content,
      recipientId: body.recipientId,
    });

    return { notification };
  }
}
