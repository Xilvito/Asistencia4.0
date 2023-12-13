import { TestBed } from '@angular/core/testing';

import { camipService } from './camip.service';

describe('camipService', () => {
    let service: camipService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(camipService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
