import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
      $(function(){
        $('.privcy a').on('click',function(){
          $('body,html').animate({
            scrollTop:0,
          },100)
        })
      })
  }

}
