import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
declare var $:any;

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {

  curentlang:string;

  constructor(public trans_ser:TranslateService) {
    this.curentlang=localStorage.getItem('curentlang') || 'en' ;
    this.trans_ser.use('ar')
  }

  ngOnInit(): void {
    $(function(){
      //start nav links 
      $('.nav-item a').on('click',function(){
        $('html,body').animate({
          scrollTop:0,
        })
      });
      //end nav links
      $('.switch_btn').on('click',function(){
        if($(this).hasClass('show')){
          $(this).removeClass('show');
          $(this).siblings().addClass('show')
        }
      });

      $(document).on('click',function(){//to hide the humburger
        $('.collapse').collapse('hide');
     })

    })
  }

  changelang(lang:string){
    this.trans_ser.use(lang)
    localStorage.setItem('curentlang',lang);  
  }
}
