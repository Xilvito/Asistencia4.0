import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http'
import { ApiService } from './api.service';
import { qrscanservice } from './qrscan.service';

describe('ApiService', () => {
    let service: qrscanservice;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
            providers: [qrscanservice],
        });
        service = TestBed.inject(qrscanservice);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
