import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Game} from '../../../core/entities/game';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

@Component({
    selector: 'app-game-modal',
    templateUrl: './game-modal.component.html',
    styleUrls: ['./game-modal.component.scss']
})
export class GameModalComponent implements OnInit {

    @Input() game: Game;
    @Output() closeModal = new EventEmitter<void>();

    safeDescription!: SafeHtml;
    expanded = false;

    constructor(private sanitizer: DomSanitizer) {
    }

    close() {
        this.closeModal.emit();
    }

    ngOnInit(): void {
        this.safeDescription = this.sanitizer.bypassSecurityTrustHtml(this.game.description);
    }

    toggleExpanded(): void {
        this.expanded = !this.expanded;
    }
}
