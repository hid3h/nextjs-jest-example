import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  issueInvoice = async ({ amount }: { amount: number }) => {
    const invoice = await this.prisma.invoiceIssuance.create({
      data: {
        amount,
        issuedAt: new Date(),
      },
    });
    return invoice;
  };
}
