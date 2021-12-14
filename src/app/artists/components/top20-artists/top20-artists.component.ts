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
  currentTimeRange = 'medium_term';
  terms = [
    { value: 'long_term', text: 'All Time'},
    { value: 'medium_term', text: 'Last 6 Months'},
    { value: 'short_term', text: 'Last 4 Weeks'}
  ];

  constructor(
    private spotifyService: SpotifyService
  ) { }

  ngOnInit(): void {
    this.top20ArtistsObs$ = this._getData(this.currentTimeRange);

    // const items =  this.spotifyService.getTop20Artists();
    // console.log('artists', items);
    // items.subscribe((data: any) => {
    //   for (const item of data.items) {
    //     console.log('artist', item, item.name);
    //   }
    // });
  }

  onTimeRangeChange(event: any): void {
    console.log('this.currentTimeRange', this.currentTimeRange, event);

    this.top20ArtistsObs$ = this._getData(this.currentTimeRange);
  }

  private _getData(timeRange: string) {
    return this.spotifyService.getTop20Artists(timeRange).pipe(map(data => data['items']));
  }
}
