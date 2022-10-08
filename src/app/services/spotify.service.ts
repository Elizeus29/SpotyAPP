import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

// el operador map permite filtrar lo que voy a rescatar del servicio
import { map } from 'rxjs/operators';

@Injectable({
  // este provider in permite que yo no tenga que agregar el servicio en el app.module
  providedIn: 'root'
})
export class SpotifyService {


  constructor(private http:HttpClient) { }

  
  // método para simplificar las consultas, utilizando la URL que no cambia y el token
  getQuery(query:string){

      const url = `https://api.spotify.com/v1/${query}`;
      
      const headers = new HttpHeaders({
        'Authorization': 'Bearer BQAH62euO0j8YyPbltoo4SkX7w0jrTYMdw1nneq-udSCf-xP5vG2wWjTBkzV5K-JbTyrNEqNnERDGxED7sf640lHImjiLpLBisSvqASn1UJDoUOIwMA'
      });

      return this.http.get(url, {headers});
  }

  getNewReleases(){


    // el operador map solo trabaja con observables!
    return this.getQuery('browse/new-releases')
               .pipe( map( (data:any) =>{ return data.albums.items }));;            
  }


  getArtistas(termino:string){   

    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
               .pipe( map( (data:any) =>{ return data.artists.items} ));
  }

  getArtista(id:string){
    return this.getQuery(`artists/${id}`);
              //  .pipe( map( (data:any) =>{ return data.artists.items} ));
    
  }

  getTopTrack(id:string){
    return this.getQuery(`artists/${ id }/top-tracks/?country=us`)
               .pipe( map( (data:any) =>{ return data.tracks} ));
    
  }

}
