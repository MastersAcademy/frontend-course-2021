import { TestBed } from '@angular/core/testing';

import { NamesSearchService } from './names-search.service';

describe('NamesSearchService', () => {
    let service: NamesSearchService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(NamesSearchService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
