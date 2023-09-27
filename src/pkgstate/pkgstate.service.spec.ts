import { Test, TestingModule } from '@nestjs/testing';
import { PkgstateService } from './pkgstate.service';

describe('PkgstateService', () => {
  let service: PkgstateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PkgstateService],
    }).compile();

    service = module.get<PkgstateService>(PkgstateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
