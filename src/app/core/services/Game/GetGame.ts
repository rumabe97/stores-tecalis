import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {GameDto, GameService} from '../../repositories/game';
import {Game} from '../../entities/game';

export function getGame(id: number, service: GameService): Observable<Game> {
    return service.getGameDetail(id).pipe(
        map((game: GameDto) => new Game({
            ...game,
            backgroundImage: game.background_image,
            ratingTop: game.rating_top,
            ratingsCount: game.ratings_count,
            reviewsTextCount: game.reviews_text_count,
            addedByStatus: game.added_by_status,
            suggestionsCount: game.suggestions_count,
            userGame: game.user_game,
            reviewsCount: game.reviews_count,
            saturatedColor: game.saturated_color,
            dominantColor: game.dominant_color,
            parentPlatforms: game.parent_platforms,
            clip: game.clip,
            esrbRating: game.esrb_rating,
            shortScreenshots: game.short_screenshots,
        }))
    )
}