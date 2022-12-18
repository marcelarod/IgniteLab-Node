import { Notification } from "./notification";
import { Content } from "./validation/notification-content";

describe('Notification', () => {

  it('should be able to create a notification', () => {
    const notification = new Notification({
        content: new Content('Você tem uma nova notificação de curso'),
        category: 'social',
        recipientId:'67dec715-9ae9-41b8-a5aa-f094d1b6cb99'
    })
    expect(notification).toBeTruthy();  
  })

})
