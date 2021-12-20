import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerTurnComponent } from './player-turn.component';

describe('PlayerTurnComponent', () => {
    let component: PlayerTurnComponent;
    let fixture: ComponentFixture<PlayerTurnComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ PlayerTurnComponent ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PlayerTurnComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
