import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IUserInfo, ISessionInfo } from './data-structure';
import "rxjs/add/operator/map";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

	constructor(private http: HttpClient) { }

	private messageSource = new BehaviorSubject<object>({});
	currentMessage = this.messageSource.asObservable();

	changeMessage(message: any) {
		this.messageSource.next(message)
	}

	getData(): Observable<IUserInfo> {
		return this.http.get('https://api.myjson.com/bins/1etfxj').map((response: IUserInfo) => response)
	}

	getSessions(): Observable<ISessionInfo> {
		return this.http.get('https://api.myjson.com/bins/1e0jvv').map((response: ISessionInfo) => response)
	}
}
