import { IsNotEmpty, IsUUID, Length } from 'class-validator';

export class CreatedNotificationBody {
  @Length(5, 240)
  @IsNotEmpty()
  category: string;

  @IsNotEmpty()
  @IsUUID()
  recipientId: string;

  @IsNotEmpty()
  content: string;
}
