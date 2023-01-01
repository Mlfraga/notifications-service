import { Content } from '@infra/entities/content';
import { Notification, NotificationProps } from '@infra/entities/notification';

type Override = Partial<NotificationProps>;

export function makeNotification(override: Override): Notification {
  return new Notification({
    category: 'social',
    content: new Content('This is a notification'),
    recipientId: 'recipient-2',
    ...override,
  });
}
