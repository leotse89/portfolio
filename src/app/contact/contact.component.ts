import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import $ from 'jquery';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

	constructor(private el: ElementRef, router:Router, title:Title) {
       	router.events.subscribe((url)=>{
          	title.setTitle('Leo Tse\'s Portfolio - Contact');
       	});
    }

  	ngOnInit() {

  	}

}
