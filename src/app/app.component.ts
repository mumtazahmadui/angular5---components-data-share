import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './shared/data.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	msgObject: object = {};

	constructor(private http: HttpClient, private dataService: DataService) { }

	ngOnInit() {
		this.dataService.getData().subscribe(data => {
			this.msgObject['userData'] = data;
			this.dataService.changeMessage(this.msgObject);
		});
		this.dataService.getSessions().subscribe(data => {
			this.msgObject['sessionList'] = data;
			this.dataService.changeMessage(this.msgObject);
		});
	}
}
