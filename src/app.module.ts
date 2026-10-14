import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ExpenseModule } from './expense/expense.module.js';
import { DatabaseModule } from './database/database.module.js';

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = join(__filename, '..');

import { ServeStaticModule } from '@nestjs/serve-static'
import { join } from 'path';
import { UserController } from './user/user.controller.js';
import { UserModule } from './user/user.module.js';

@Module({
  imports: [

    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public')
    }),

    ConfigModule.forRoot({
      isGlobal: true,
    }),

    ExpenseModule,
    DatabaseModule,
    UserModule
  ],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule {}
