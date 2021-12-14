import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-top20-artists',
  templateUrl: './top20-artists.component.html',
  styleUrls: ['./top20-artists.component.scss']
})
export class Top20ArtistsComponent implements OnInit {
  top20ArtistsObs$: Observable<any>;

  constructor(
    private spotifyService: SpotifyService
  ) { }

  ngOnInit(): void {
    this.top20ArtistsObs$ = this.spotifyService.getTop20Artists().pipe(map(data => data['items']));

    const items =  this.spotifyService.getTop20Artists();
    console.log('artists', items);
    items.subscribe((data: any) => {
      for (const item of data.items) {
        console.log('artist', item, item.name);
      }
    });
  }

}
