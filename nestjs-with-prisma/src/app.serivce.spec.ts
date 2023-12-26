import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('請求書', () => {
  let appSerivce: AppService;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appSerivce = moduleRef.get<AppService>(AppService);
  });

  it('請求書発行', async () => {
    await appSerivce.issueInvoice({ amount: 1000 });

    const invoiceIssuance = await prisma.invoiceIssuance.findFirst();
    expect(invoiceIssuance?.amount).toBe(1000);
  });

  // describe('getHello', () => {
  //   it('should return "Hello World!"', () => {
  //     const appController = app.get(AppController);
  //     expect(appController.getHello()).toBe('Hello World!');
  //   });
  // });
});
