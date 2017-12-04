import { Component, OnInit } from '@angular/core';
//import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../shared/data.service';


@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
	msgObject:object;
	constructor(private dataService:DataService) { }

	ngOnInit() {
		this.dataService.currentMessage.subscribe(data => {
			this.msgObject = data;
			console.log(this.msgObject);
		});
	}
}
