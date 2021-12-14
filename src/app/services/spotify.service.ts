import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private _token = 'BQAQpZ00KWYDkqEB78EMsRjNMrHGk9wSqQDWAfZvhQCxnypOzg1oppUQFEsbVE09zEzZ14R0_u2MO-zv4XSVIrXFFuoFSfP_UV7JJRC9bB5v-_82hdVKQ6NVUuv8A5PNPhOvE4pXXT4vqLGqBXrheqR_J3Le_KKyUXcJ-Nj7UyBTfu-CqSnPCOtTww';

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
