import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SimpleGame} from '../../../core/entities/game';

@Component({
    selector: 'app-game-card',
    templateUrl: './game-card.component.html',
    styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent implements OnInit {
    @Input() game: SimpleGame;
    @Output() openModal = new EventEmitter<number>();

    constructor() {
    }

    ngOnInit(): void {
    }

    openGameModal() {
        this.openModal.emit(this.game.id);
    }
}
