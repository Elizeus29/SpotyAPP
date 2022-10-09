import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  nuevasCanciones:any[] = [];
  loading: boolean;


  constructor(private servicioSpotify: SpotifyService) { 

    this.loading = true;
    
    this.servicioSpotify.getNewReleases()
        .subscribe(            
          (data) =>{          
            this.nuevasCanciones = data;          
            this.loading = false;
          });

  }


}
