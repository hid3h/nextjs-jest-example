import { Test } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';

describe('請求書', () => {
  let appSerivce: AppService;

  beforeAll(async () => {
    console.log('process.env.DATABASE_URL1', process.env.DATABASE_URL);
    console.log('process.env.NODE_ENV1', process.env.NODE_ENV);
    const moduleRef = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService, PrismaService],
    }).compile();

    appSerivce = moduleRef.get<AppService>(AppService);
    console.log('process.env.DATABASE_URL2', process.env.DATABASE_URL);
    console.log('process.env.NODE_ENV2', process.env.NODE_ENV);
  });

  it('請求書発行', async () => {
    // await appSerivce.issueInvoice({ amount: 1000 });
    // const invoiceIssuance = await prisma.invoiceIssuance.findFirst();
    // expect(invoiceIssuance?.amount).toBe(1000);
  });

  // describe('getHello', () => {
  //   it('should return "Hello World!"', () => {
  //     const appController = app.get(AppController);
  //     expect(appController.getHello()).toBe('Hello World!');
  //   });
  // });
});
