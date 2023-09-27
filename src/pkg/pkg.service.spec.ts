import { Test, TestingModule } from '@nestjs/testing';
import { PkgService } from './pkg.service';

describe('PkgService', () => {
  let service: PkgService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PkgService],
    }).compile();

    service = module.get<PkgService>(PkgService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
