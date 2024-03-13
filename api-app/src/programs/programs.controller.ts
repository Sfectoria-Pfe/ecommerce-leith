import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { ProgramsService } from './programs.service';
import { CreateProgramDto } from './dto/create-program.dto';
import { UpdateProgramDto } from './dto/update-program.dto';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CurrentUser } from 'src/auth/decorator/current-user';
@ApiTags('PROGRAMS')
@Controller('programs')
export class ProgramsController {
  constructor(private readonly programsService: ProgramsService) {}

  @Post()
  create(@Body() dto: CreateProgramDto) {
    return this.programsService.create(dto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(@CurrentUser() user) {
    if (['teacher','admin','manager'].includes(user.role)) {
      return this.programsService.findAll(user.id);
    } else throw new HttpException('invalid account',HttpStatus.FORBIDDEN);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @CurrentUser() user) {
    return this.programsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProgramDto: UpdateProgramDto) {
    return this.programsService.update(+id, updateProgramDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.programsService.remove(+id);
  }
}
