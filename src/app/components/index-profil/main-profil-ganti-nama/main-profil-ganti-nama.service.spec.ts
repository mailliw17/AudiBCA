import { TestBed } from '@angular/core/testing';

import { MainProfilGantiNamaService } from './main-profil-ganti-nama.service';

describe('MainProfilGantiNamaService', () => {
  let service: MainProfilGantiNamaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainProfilGantiNamaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
