import { IsNotEmpty, IsUUID, Length } from 'class-validator';

export class CreatedNotificationBody {
  @IsNotEmpty()
  @IsUUID()
  content: string;

  @Length(5, 240)
  @IsNotEmpty()
  category: string;

  @IsNotEmpty()
  recipientId: string;
}
