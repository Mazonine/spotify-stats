import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private _token = 'BQD9TugQc55YSqWzr4dRsFA2mZxLbnFGk-CugOkbg-s53jeBXzxwFky8DB8lvtRWJts9HYCKkEmmOGWdvjX2FHZasgxXyY2rtQHjozhOlcREp3T6ZN7Xn3HHioWffV4snL9FisQh6Ks5hqAWV3VOPeaAWvkvA7oJcUlzA5rOoTus7AfSiYR7tHvW0A';

  constructor(
    private httpClient: HttpClient
  ) { }

  public getMyProfile(): Observable<any> {
    const url = `https://api.spotify.com/v1/me`;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this._token}`
    });

    return this.httpClient.get(url, { headers });
  }

  public getTop20Artists(): Observable<any> {
    const url = `https://api.spotify.com/v1/me/top/artists?offset=0&limit=20`;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this._token}`
    });

    return this.httpClient.get(url, { headers });
  }

  public getTop20Tracks(): Observable<any> {
    const url = `https://api.spotify.com/v1/me/top/tracks?offset=0&limit=20`;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this._token}`
    });

    return this.httpClient.get(url, { headers });
  }
}
