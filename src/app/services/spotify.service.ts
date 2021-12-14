import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private _token = 'BQC8mfbffyvP_sPf6tAPa62oJcNIrxgRK2EsEy8roStjqny-PlKywvLNC6nrTmS53sHQzRY8SIyPzo7IoxycrXeEe-BxMKMghipemRDTDULBZDMTnfjVUFLtGOsCK6ByCBb9ks2Zg9BWbhulVf7aMJgf8sF1S5vMYfjbMDil-TJDr7J6OC3zWKe1gA';

  constructor(
    private httpClient: HttpClient
  ) { }

  public login(): Observable<any> {
    const httpHeaders = new HttpHeaders()
      .set('property', 'd52ad16c9b314b97b37b58ccf1fca105')
      .set('response_type', 'code')
      .set('redirect_url', 'http://localhost:4200/test')
      .set('scope', 'playlist-read-private user-library-read user-top-read user-read-private')
      .set('show_dialog', 'true');

    // return this.httpClient.get(`https://accounts.spotify.com/authorize`, { headers: httpHeaders });

    const queryParams = 'response_type=token' +
      '&redirect_uri=http%3A%2F%2Flocalhost:4200%2Fcallback' +
      '&client_id=d52ad16c9b314b97b37b58ccf1fca105' +
      '&scope=playlist-read-private user-library-read user-top-read user-read-private' +
      '&state=y0h1d';

    return this.httpClient.get(`https://accounts.spotify.com/authorize?${queryParams}`);
  }

  public getMyProfile(): Observable<any> {
    const url = `https://api.spotify.com/v1/me`;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this._token}`
    });

    return this.httpClient.get(url, { headers });
  }

  public getTop20Artists(term: string): Observable<any> {
    const url = `https://api.spotify.com/v1/me/top/artists?offset=0&limit=20&time_range=${term}`;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this._token}`
    });

    return this.httpClient.get(url, { headers });
  }

  public getTop20Tracks(term: string): Observable<any> {
    const url = `https://api.spotify.com/v1/me/top/tracks?offset=0&limit=20&time_range=${term}`;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this._token}`
    });

    return this.httpClient.get(url, { headers });
  }
}
