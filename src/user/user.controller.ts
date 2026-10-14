import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto.js';
import { UserService } from './user.service.js';

@Controller('user')
export class UserController {
    constructor(private readonly userService : UserService) {}

    @Get('/testroute') 
    routeGetHit() {
        return {
            data: true,
            message: "Route test hit from POSTMAN API TEST"
        }
    }

    @Post('/register') 
    createUser(@Body() createUserDto : CreateUserDto)  {
        // return userService Logic
    }

}
