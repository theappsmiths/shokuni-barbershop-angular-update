import { SaloonModule } from './saloon.module';

describe('SaloonModule', () => {
  let saloonModule: SaloonModule;

  beforeEach(() => {
    saloonModule = new SaloonModule();
  });

  it('should create an instance', () => {
    expect(saloonModule).toBeTruthy();
  });
});
