import { TestBed } from '@angular/core/testing';

import { DataprocessorService } from './dataprocessor.service';

describe('DataprocessorService', () => {
    let service: DataprocessorService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(DataprocessorService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
