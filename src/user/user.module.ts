import { Module } from '@nestjs/common';
import { UserService } from './user.service.js';
import { DatabaseModule } from '../database/database.module.js';

@Module({
  providers: [UserService],
  exports: [UserService],
  imports: [DatabaseModule]
})
export class UserModule {}
