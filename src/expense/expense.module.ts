import { Module } from '@nestjs/common';
import { ExpenseController } from './expense.controller.js';
import { ExpenseService } from './expense.service.js';

@Module({
  controllers: [ExpenseController],
  providers: [ExpenseService]
})
export class ExpenseModule {}
