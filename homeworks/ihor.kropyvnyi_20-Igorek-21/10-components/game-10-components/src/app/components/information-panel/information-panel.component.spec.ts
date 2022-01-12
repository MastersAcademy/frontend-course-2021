import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationPanelComponent } from './information-panel.component';

describe('InformationPanelComponent', () => {
    let component: InformationPanelComponent;
    let fixture: ComponentFixture<InformationPanelComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ InformationPanelComponent ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(InformationPanelComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
