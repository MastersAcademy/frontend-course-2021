import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameFieldComponent } from './game-field.component';

describe('GameFieldComponent', () => {
    let component: GameFieldComponent;
    let fixture: ComponentFixture<GameFieldComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ GameFieldComponent ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(GameFieldComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
