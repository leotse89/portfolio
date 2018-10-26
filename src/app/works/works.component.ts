import { Component, OnInit, Input, Output, OnChanges, EventEmitter, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import $ from 'jquery';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})

export class WorksComponent implements OnInit {

    works = [ 
      {"id": 1, "shortDesc":"Foundation 5", "type":"website", "name" : "eGiant Media", "site": "//egiantmedia.com/"},
      {"id": 2, "shortDesc":"Foundation 5, Logo Design, Business Card", "type":"website webapp design", "name" : "Global Fortune Group", "site": "//globalfortunegroup.com/"},
      {"id": 3, "shortDesc":"Wordpress, Web Design", "type":"website design", "name" : "Evilnut Creative Technology", "site": "//www.evilnut.ca/"},
      {"id": 4, "shortDesc":"Wordpress", "type":"website", "name" : "IO Academy", "site": "//www.ioeducate.com/"},
      {"id": 5, "shortDesc":"Laravel 5, Bootstrap 3", "type":"website webapp", "name" : "Ticket Canada", "site": "https://ticketcanada.ca/"},
      {"id": 6, "shortDesc":"Laravel 5, Bootstrap 3", "type":"webapp", "name" : "Papa Bus", "site": "https://papabus.ca/"},
      {"id": 7, "shortDesc":"Shopify, Web Design, E-commerce, SEO", "type":"website design", "name" : "Home Idol Building Supply", "site": "//homeidol.com"},
      {"id": 8, "shortDesc":"Laravel 5, Bootstrap 3", "type":"website webapp", "name" : "Chii Food", "site": "https://www.chiifood.com/"},
      {"id": 9, "shortDesc":"Logo Design", "type":"design", "name" : "Moo\'s Art Studio", "site": "//moosartstudio.com/"},
      {"id": 10, "shortDesc":"Wordpress", "type":"website", "name" : "JC.MM Consulting", "site": "//www.jccanada.com/"},
      {"id": 11, "shortDesc":"Wordpress, Logo Design", "type":"website design", "name" : "GW2 Renovation", "site": "//gw2renovation.com/"},
      {"id": 12, "shortDesc":"Laravel 5, Icon Design", "type":"website webapp design", "name" : "Vancouver Coastal Health", "site": "//learndev.vch.ca/vch/public/hurt-or-sick-at-work"},
    ];

	  constructor(private el: ElementRef, router:Router, title:Title) {
       	router.events.subscribe((url)=>{
          	title.setTitle('Leo Tse\'s Portfolio - Works');
       	});
    }

  	ngOnInit() {

  	}

}
