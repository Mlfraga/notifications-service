import { Notification } from '@infra/entities/notification';

export abstract class NotificationsRepository {
  abstract create(notification: Notification): Promise<void>;
  abstract save(notification: Notification): Promise<void>;
  abstract findById(notificationId: string): Promise<Notification | null>;
  abstract countManyByRecpientId(recipientId: string): Promise<number>;
  abstract findManyByRecpientId(recipientId: string): Promise<Notification[]>;
}
