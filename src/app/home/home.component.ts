import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	msgObject: any;
	
	constructor(private dataService: DataService) { }

	ngOnInit() {
		
		
		this.dataService.currentMessage.subscribe(message => {
			this.msgObject = message;
			console.log(this.msgObject);
		});

		
	}

}
