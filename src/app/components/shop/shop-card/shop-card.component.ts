import {Component, Input, OnInit} from '@angular/core';

@Component({
	selector: 'app-shop-card',
	templateUrl: './shop-card.component.html',
	styleUrls: ['./shop-card.component.css']
})
export class ShopCardComponent implements OnInit {
	@Input() imageUrl: string;
	@Input() name: string;
	@Input() cost: string;
	@Input() available: string;

	constructor() {
	}

	ngOnInit() {
	}

}
