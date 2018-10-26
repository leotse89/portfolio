import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import $ from 'jquery';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

    otaku = 'A Japanese term that describes a person who is obsessed with Technology, Manga, Anime, and Video Games. In fact, an Otaku does not exercise nor socialize much as well. A true Otaku always stays home and do the stuffs he loves everyday.';

	  constructor(private el: ElementRef, router:Router, title:Title) {
       	router.events.subscribe((url)=>{
          	title.setTitle('Leo Tse\'s Portfolio - About');
       	});
    }

  	ngOnInit() {

  	}

}
