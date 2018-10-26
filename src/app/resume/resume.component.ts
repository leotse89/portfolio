import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import $ from 'jquery';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

	constructor(private el: ElementRef, router:Router, title:Title) {
       	router.events.subscribe((url)=>{
          	title.setTitle('Leo Tse\'s Portfolio - Resume');
       	});
    }

  	ngOnInit() {
      $('.level-bar-inner').each(function() {
          var itemWidth = $(this).data('level');
          $(this).animate({
              width: itemWidth
          }, 1000);
      });
  	}

}
