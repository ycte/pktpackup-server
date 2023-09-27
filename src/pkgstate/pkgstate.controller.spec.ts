import { Test, TestingModule } from '@nestjs/testing';
import { PkgstateController } from './pkgstate.controller';

describe('PkgstateController', () => {
  let controller: PkgstateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PkgstateController],
    }).compile();

    controller = module.get<PkgstateController>(PkgstateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
