import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { ProgramsModule } from './programs/programs.module';
import { ModulesModule } from './modules/modules.module';

@Module({
  imports: [UsersModule, PrismaModule, ProgramsModule, ModulesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
