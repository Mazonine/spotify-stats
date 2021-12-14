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
  currentTimeRange = 'medium_term';
  terms = [
    { value: 'long_term', text: 'All Time'},
    { value: 'medium_term', text: 'Last 6 Months'},
    { value: 'short_term', text: 'Last 4 Weeks'}
  ];

  constructor(
    private spotifyService: SpotifyService) { }

  ngOnInit(): void {
    this.top20TracksObs$ = this._getData(this.currentTimeRange);

    // const items =  this.spotifyService.getTop20Tracks('medium_term');
    // console.log('tracks', items);
    // items.subscribe((data: any) => {
    //   for (const item of data.items) {
    //     console.log('track', item, item.name);
    //   }
    // });
  }

  onTimeRangeChange(event: any): void {
    console.log('this.currentTimeRange', this.currentTimeRange, event);

    this.top20TracksObs$ = this._getData(this.currentTimeRange);
  }

  private _getData(timeRange: string) {
    return this.spotifyService.getTop20Tracks(timeRange).pipe(map(data => data['items']));
  }
}
