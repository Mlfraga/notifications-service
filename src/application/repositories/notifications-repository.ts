import { Notification } from 'src/infra/entities/notification';

export abstract class NotificationsRepository {
  abstract create(notification: Notification): Promise<void>;
}
