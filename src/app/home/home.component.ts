import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import $ from 'jquery';
import vegas from 'vegas/dist/vegas';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  	constructor(private el: ElementRef, router:Router, title:Title) {
       	router.events.subscribe((url)=>{
          	title.setTitle('Leo Tse\'s Portfolio - A Full Stack PHP Web Developer\'s Dev Cave');
       	});
    }

  	ngOnInit() {
  		var height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
 		$('#home-msg-wrapper').css('height', height+'px');
 		
 		$(window).on('resize', function(){
 			height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
 			$('#home-msg-wrapper').css('height', height+'px');
 		});
  	}

}
