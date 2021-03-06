import { Controller, Post, Body, UseGuards, Request, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { LoansService } from './loans.service';

@Controller('loans')
export class LoansController {
    constructor(private readonly loansService: LoansService) {}

    @UseGuards(AuthGuard('jwt'))
    @Post()
    async addLoan(
        @Request() req,
        @Body('id') id: string,
        @Body('duration') duration: number,
    ) {
        const realizationDate = new Date().toLocaleDateString();
        const loanGenerated = await this.loansService.insertProduct(req.user, id, duration, realizationDate);
        return { loanGenerated };
    }

    @UseGuards(AuthGuard('jwt'))
  @Get('personalLoans')
  getProfile(@Request() req) {
    return this.loansService.getLoansByUser(req.user);
  }
}
