import { Injectable } from "@nestjs/common";
import { Notification } from "../entities/notification";
import { Content } from "../entities/validation/notification-content";
import { NotificationRepository } from "../repositories/notification-repository";

interface SendNotificationRequest {
  recipientId: string;
  category: string;
  content: string;
}

interface SendNotificationResponse {
  notification: Notification
}

@Injectable()
export class SendNotification {
  constructor(private notificationRepository : NotificationRepository){}
  
  async execute(request: SendNotificationRequest): Promise<SendNotificationResponse> {
    const { recipientId, category, content } = request

    const notification = new Notification({
      recipientId,
      category,
      content: new Content(content),
    })

    await this.notificationRepository.create(notification);
    return {
      notification
    }
  }
}