import { Component, OnInit, Input,HostListener,} from '@angular/core';
import { CoronaService } from 'src/app/services/corona.service';
//charts

declare var $:any;


@HostListener('window:scroll', [])
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 todayDate;//the date
  //total
  TotalConfirmed=0;
  TotalDeaths=0;
  TotalRecovered=0;
  //NEW
  newconfirmed=0;
  newdeaths=0;
  newrecoverd=0;
  
  

  constructor(private ser:CoronaService) { }
  ngOnInit(): void {
    this.ser.summary().subscribe(data =>{
      let date=data.Date;
      this.todayDate=date;
      //start new statistic
      let global=data.Global;
      let TotalConfirmed=global.TotalConfirmed;
      let TotalDeaths=global.TotalDeaths;
      let TotalRecovered=global.TotalRecovered;
      //push
      this.TotalConfirmed=TotalConfirmed;
      this.TotalDeaths=TotalDeaths;
      this.TotalRecovered=TotalRecovered;
  
      //start new statistic
      let newconfirmed=global.NewConfirmed;
      let newdeaths=global.NewDeaths;
      let newrecoverd=global.NewRecovered
      //push
      this.newconfirmed=newconfirmed;
      this.newdeaths=newdeaths;
      this.newrecoverd=newrecoverd;
      console.log(global);
 
    });
  

    $(function(){
      //start nav links 
      $('.more').on('click',function(){
        $('html,body').animate({
          scrollTop:0,
        })
      });
      //end nav links
    })
  }



}
