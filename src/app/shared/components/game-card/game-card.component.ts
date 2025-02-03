import {Component, Input, OnInit} from '@angular/core';
import {SimpleGame} from '../../../core/entities/game';

@Component({
    selector: 'app-game-card',
    templateUrl: './game-card.component.html',
    styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent implements OnInit {
    @Input() game: SimpleGame;

    constructor() {
    }

    ngOnInit(): void {
    }

}
