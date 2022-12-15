import { Controller, Get , Post} from '@nestjs/common';
import { Body } from '@nestjs/common/decorators';
import { randomUUID } from 'node:crypto';
import { AppService } from './app.service';
import { CreateNotificationBody } from './create-notification-body';
import { PrismaService } from './prisma.service';

@Controller('notifications')
export class AppController {
  constructor(private readonly prismaService: PrismaService) {}

  @Get()
  list(){
    return this.prismaService.notification.findMany()
  }

  @Post()
  async create(@Body() body:CreateNotificationBody){
    console.log(body)
    const {content, category,recipientId  } = body
    await this.prismaService.notification.create({
      data:{
        id: randomUUID(),
        content,
        category,
        recipientId
      }
    })
    return this.prismaService.notification.findMany()
  }
}
