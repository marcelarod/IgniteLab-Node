import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { Notification } from "../entities/notification";
import { Content } from "../entities/validation/notification-content";
import { SendNotification } from "./send-notifications";

describe('Send Notification', () => {

  it('should be able to send a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository()
    const sendNotification = new SendNotification(notificationsRepository)

    const {notification} = await sendNotification.execute({
      content: 'Você tem uma nova notificação de curso',
      category: 'social',
      recipientId:'67dec715-9ae9-41b8-a5aa-f094d1b6cb99'
    })
    expect(notificationsRepository.notifications).toHaveLength(1)
    expect(notificationsRepository.notifications[0]).toEqual(notification)

  })
})
