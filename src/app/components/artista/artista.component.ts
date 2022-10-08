import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent {

  artista:any = {};
  loadingArtista = true;
  topTracks:any [] = [];

  constructor(private activatedRoute:ActivatedRoute,
              private spotify: SpotifyService) { 

    this.loadingArtista = true;

    this.activatedRoute.params.subscribe( parametro => {
        this,this.getArtista(parametro['id']);
        this,this.getTopTracks(parametro['id']);
    });

  }

  getArtista(id: string){

    this.loadingArtista = true;

      this.spotify.getArtista(id).subscribe( data =>{      
        console.log(data);
        
        this.artista = data;
        this.loadingArtista = false;
      })
  }

  getTopTracks(id:string){
    this.spotify.getTopTrack(id).subscribe( data =>{
       this.topTracks = data;
       console.log(data);
       
    });
  }


}

