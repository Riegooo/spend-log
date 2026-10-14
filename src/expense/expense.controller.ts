import { Controller, Body, Get, Post, Param } from '@nestjs/common';
import { ExpenseService } from './expense.service.js';

@Controller('expense')
export class ExpenseController {
    constructor(private readonly expenseService: ExpenseService) {}

    @Get('/testroute')
    helloMessage() {
        return {
            data: true,
            message: "HELLO WORLD TEST API"
        }
    }



}
