import { TestBed } from '@angular/core/testing';

import { GoogleFontsService } from './google-fonts.service';

describe('GoogleFontsService', () => {
    let service: GoogleFontsService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(GoogleFontsService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
