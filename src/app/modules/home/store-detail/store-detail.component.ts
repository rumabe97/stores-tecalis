import {Component, OnInit} from '@angular/core';
import {Store} from '../../../core/entities/store';
import {ActivatedRoute} from '@angular/router';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import {GameService} from '../../../core/repositories/game';
import {Game} from '../../../core/entities/game';
import {getGame} from '../../../core/services/Game/GetGame';

@Component({
    selector: 'app-store-detail',
    templateUrl: './store-detail.component.html',
    styleUrls: ['./store-detail.component.scss']
})
export class StoreDetailComponent implements OnInit {
    store: Store;
    safeDescription!: SafeHtml;
    selectedGame:Game;

    constructor(private _route: ActivatedRoute, private sanitizer: DomSanitizer, private _gameService: GameService) {
    }

    ngOnInit(): void {
        this.store = this._route.snapshot.data.response;
        this.safeDescription = this.sanitizer.bypassSecurityTrustHtml(this.store.description);
    }

    openModal(id: number) {
       getGame(id,this._gameService).subscribe(game => {
           this.selectedGame = game;
           console.log(this.selectedGame)
       })
    }
}
