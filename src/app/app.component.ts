import { Component } from '@angular/core';
import {SpotifyService} from '../app/services/spotify.service';
import {Artist} from '../../Artist';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[SpotifyService]
})

export class AppComponent {
  title = 'app';
  searchText:string;
  searchRes: Artist[];
  constructor(private _SpotifyService:SpotifyService){

  }
    searchMusic() {
      this._SpotifyService.getToken()
        .subscribe(res => {
            this._SpotifyService.searchMusic(this.searchText ,'artist' , res.access_token)
              .subscribe(res=> {
                this.searchRes=res.artists.items;
              
           })
        })
      
   } 

}
