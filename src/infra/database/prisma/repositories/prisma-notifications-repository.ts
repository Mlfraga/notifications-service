import { NotificationsRepository } from '../../../../application/repositories/notifications-repository';
import { Notification } from '../../../../infra/entities/notification';
import { PrismaService } from '../prisma.service';
import { Injectable } from '@nestjs/common';
import { PrismaNotificationMapper } from '../mappers/prisma-notification-mapper';
import { Content } from '@infra/entities/content';

@Injectable()
export default class PrismaNotificationsRepository
  implements NotificationsRepository
{
  constructor(private prismaService: PrismaService) {}

  async findManyByRecpientId(recipientId: string): Promise<Notification[]> {
    const notifications = await this.prismaService.notification.findMany({
      where: {
        recipientId,
      },
    });

    return notifications.map(notification =>
      PrismaNotificationMapper.toDomain(notification),
    );
  }

  async countManyByRecpientId(recipientId: string): Promise<number> {
    const prismaNotificationsCount =
      await this.prismaService.notification.count({
        where: {
          recipientId,
          readAt: null,
        },
      });

    return prismaNotificationsCount;
  }

  async findById(notificationId: string): Promise<Notification | null> {
    const notification = await this.prismaService.notification.findUnique({
      where: {
        id: notificationId,
      },
    });

    return PrismaNotificationMapper.toDomain(notification);
  }

  async save(notification: Notification): Promise<void> {
    const raw = PrismaNotificationMapper.toPrisma(notification);

    console.log('raw', raw);

    await this.prismaService.notification.update({
      data: { ...raw },
      where: { id: notification.id },
    });
  }

  async create(notification: Notification): Promise<void> {
    const raw = PrismaNotificationMapper.toPrisma(notification);

    await this.prismaService.notification.create({
      data: raw,
    });
  }
}
