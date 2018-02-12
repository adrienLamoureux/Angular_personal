import { Component } from '@angular/core';
import { ServerService } from './shared/server.service';
import { DomSanitizer } from '@angular/platform-browser';
import { SafeResourceUrl } from '@angular/platform-browser/src/security/dom_sanitization_service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public title: string;
  public mapLink: SafeResourceUrl;

  constructor(private serverService: ServerService, private sanitizer: DomSanitizer){
    var self = this;
    serverService.getHomeInitData().toPromise().then(function(res){
      self.mapLink = sanitizer.bypassSecurityTrustResourceUrl(res.map.link);
      self.title = res.appName || 'default';
    },
    function(err){
      self.title = 'error';
    });
  }

  ngOnInit(){
    
  }
  
}
