import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';

@Component({
	selector: 'app-left',
	templateUrl: './left.component.html',
	styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit {

	msgObject: object = { userData: {} };
	sessions:[object];

	constructor(private dataService: DataService) { }

	ngOnInit() {
		this.dataService.currentMessage.subscribe(message => {
			this.msgObject = message;
			this.sessions = this.msgObject['sessionList'];
			console.log(this.msgObject);
		});
	}

	showSessionDetail(currentSession:object) {
		this.msgObject['currentSession'] = currentSession;
		this.dataService.changeMessage(this.msgObject);
	}
}
