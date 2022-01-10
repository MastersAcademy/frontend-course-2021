import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameDashboardComponent } from './game-dashboard.component';

describe('GameDashboardComponent', () => {
    let component: GameDashboardComponent;
    let fixture: ComponentFixture<GameDashboardComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ GameDashboardComponent ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(GameDashboardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
