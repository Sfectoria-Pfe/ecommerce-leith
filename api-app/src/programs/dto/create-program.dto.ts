import { IsEmail, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateProgramDto {
  @IsNotEmpty()
  title: string;
  @IsNotEmpty()
  imageURL: string;
  description?: string;

  @IsNumber()
  price: number;

  @IsNotEmpty()
  category: string;
}
