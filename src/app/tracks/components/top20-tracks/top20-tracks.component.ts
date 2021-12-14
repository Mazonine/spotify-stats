import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-top20-tracks',
  templateUrl: './top20-tracks.component.html',
  styleUrls: ['./top20-tracks.component.scss']
})
export class Top20TracksComponent implements OnInit {
  top20TracksObs$: Observable<any>;

  constructor(
    private spotifyService: SpotifyService) { }

  ngOnInit(): void {
    this.top20TracksObs$ = this.spotifyService.getTop20Tracks().pipe(map(data => data['items']));

    const items =  this.spotifyService.getTop20Tracks();
    console.log('tracks', items);
    items.subscribe((data: any) => {
      for (const item of data.items) {
        console.log('track', item, item.name);
      }
    });
  }

}
