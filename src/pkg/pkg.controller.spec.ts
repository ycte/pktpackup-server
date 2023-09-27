import { Test, TestingModule } from '@nestjs/testing';
import { PkgController } from './pkg.controller';

describe('PkgController', () => {
  let controller: PkgController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PkgController],
    }).compile();

    controller = module.get<PkgController>(PkgController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
