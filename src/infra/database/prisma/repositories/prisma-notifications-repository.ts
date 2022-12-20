import { NotificationsRepository } from '../../../../application/repositories/notifications-repository';
import { Notification } from '../../../../infra/entities/notification';
import { PrismaService } from '../prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export default class PrismaNotificationsRepository
  implements NotificationsRepository
{
  constructor(private prismaService: PrismaService) {}

  async create(notification: Notification): Promise<void> {
    await this.prismaService.notification.create({
      data: {
        id: notification.id,
        category: notification.category,
        content: notification.content.value,
        recipientId: notification.recipientId,
        readAt: notification.readAt || null,
        createdAt: notification.createdAt,
      },
    });
  }
}
