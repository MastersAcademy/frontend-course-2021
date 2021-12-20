import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerValueComponent } from './player-value.component';

describe('PlayerValueComponent', () => {
    let component: PlayerValueComponent;
    let fixture: ComponentFixture<PlayerValueComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ PlayerValueComponent ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PlayerValueComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
