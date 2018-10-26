import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import $ from 'jquery';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

	constructor(private el: ElementRef, router:Router, title:Title) {
       	router.events.subscribe((url)=>{
          	title.setTitle('Leo Tse\'s Portfolio - 404 Page Not Found');
       	});
    }

  	ngOnInit() {

  	}

}
