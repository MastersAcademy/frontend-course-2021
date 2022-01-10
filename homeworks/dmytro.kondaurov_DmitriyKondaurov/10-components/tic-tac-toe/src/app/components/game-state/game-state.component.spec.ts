import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameStateComponent } from './game-state.component';

describe('GameStateComponent', () => {
    let component: GameStateComponent;
    let fixture: ComponentFixture<GameStateComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ GameStateComponent ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(GameStateComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
