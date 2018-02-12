import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ServerService {

    private serverURL: string;

    constructor(private http: HttpClient) { 
        this.serverURL = "http://127.0.0.1:3000/api/";
    }

    public getHomeInitData(): Observable<HomeInit>{
        return this.http.get<HomeInit>(this.serverURL + "home/init");
    }
}