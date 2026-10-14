import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto.js';
import { DatabaseService } from '../database/database.service.js';

@Injectable()
export class UserService {
    constructor(private readonly databaseService : DatabaseService) {}

    async createAccont(createUserDto : CreateUserDto) {

        const { firstname, lastname, username, email, password, confirmation_password } = createUserDto;

        if (password != confirmation_password) {
            throw new BadRequestException(
                'Password and Confirmation password do not match.'
            );
        }

        

    }
}
