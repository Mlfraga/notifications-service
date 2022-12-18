import { randomUUID } from 'node:crypto';
import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  it('Should be able to create a notification', () => {
    const notification = new Notification({
      category: 'social',
      content: new Content('Nova notificação de amizade!'),
      recipientId: randomUUID(),
    });

    expect(notification).toBeTruthy();
  });
});
