import { Injectable } from "@nestjs/common";
import { Notification } from "../../../../application/entities/notification";
import { NotificationRepository } from "../../../../application/repositories/notification-repository";
import { PrismaService } from "../prisma.service";

@Injectable()
export class PrismaNotificationsRepository implements NotificationRepository{
  constructor(private prismaService: PrismaService){}
  async create(notification: Notification): Promise<void> {
    await this.prismaService.notification.create({
      data:{
        id: notification.id,
        content: notification.content.value,
        recipientId: notification.recipientId,
        category: notification.category,
        readAt: notification.readAt,
        createdAt: notification.createdAt
      }
    })
  }

}