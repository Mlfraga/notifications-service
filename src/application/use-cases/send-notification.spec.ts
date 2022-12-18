import { SendNotification } from './send-notification';
import { Notification } from '../../infra/entities/notification';

const notifications: Notification[] = [];

const notificationsRepository = {
  async create(notification: Notification) {
    console.log('notification: ', notification);

    notifications.push(notification);
  },
};

describe('Send notification', () => {
  it('Should be able to send notifications', () => {
    const sendNotification = new SendNotification(notificationsRepository);

    sendNotification.execute({
      category: 'Social',
      content: 'This is a notification',
      recipientId: 'example-recipient-id',
    });

    expect(notifications).toHaveLength(1);
  });
});
