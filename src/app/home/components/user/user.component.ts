import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  myProfileObs$: Observable<any>;

  constructor(
    private spotifyService: SpotifyService
  ) { }

  ngOnInit(): void {
    this.myProfileObs$ = this.spotifyService.getMyProfile();

    // myProfileObs.subscribe((data: any) => {
    //   console.log('data', data);
    // });
  }

}
