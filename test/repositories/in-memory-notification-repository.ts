import { NotificationsRepository } from '@application/repositories/notifications-repository';
import { Notification } from '@infra/entities/notification';

export class InMemoryNotificationsRepository
  implements NotificationsRepository
{
  public notifications: Notification[] = [];

  async findManyByRecpientId(recipientId: string): Promise<Notification[]> {
    const notifications = this.notifications.filter(
      item => item.recipientId === recipientId,
    );

    return notifications;
  }

  async countManyByRecpientId(recipientId: string): Promise<number> {
    const notifications = this.notifications.filter(
      item => item.recipientId === recipientId,
    );

    return notifications.length;
  }

  async findById(notificationId: string): Promise<Notification> {
    const notification = this.notifications.find(
      notification => notification.id === notificationId,
    );

    if (!notification) {
      return null;
    }

    return notification;
  }

  async create(notification: Notification) {
    this.notifications.push(notification);
  }

  async save(notification: Notification): Promise<void> {
    const notificationIndex = this.notifications.findIndex(
      item => item.id === notification.id,
    );

    if (notificationIndex >= 0) {
      this.notifications[notificationIndex] = notification;
    }
  }
}
