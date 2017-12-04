import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';

@Component({
	selector: 'app-right',
	templateUrl: './right.component.html',
	styleUrls: ['./right.component.css']
})
export class RightComponent implements OnInit {

	msgObject: object;
	currentSession:object;
	constructor(private dataService: DataService) { }

	ngOnInit() {
		this.dataService.currentMessage.subscribe(message => {
			this.msgObject = message;
			console.log(this.msgObject);
			this.currentSession = this.msgObject['currentSession'];
		});
	}
}
