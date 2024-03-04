import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { ProgramsModule } from './programs/programs.module';
import { ModulesModule } from './modules/modules.module';
import { SessionsModule } from './sessions/sessions.module';

@Module({
  imports: [UsersModule, PrismaModule, ProgramsModule, ModulesModule, SessionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
