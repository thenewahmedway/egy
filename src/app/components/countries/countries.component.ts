import { Component, OnInit ,ViewChild, ElementRef } from '@angular/core';
import { CoronaService } from 'src/app/services/corona.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})

export class CountriesComponent implements OnInit {
  data: string[] = [  ];
  countryName='';
  countryCode='';
  //allcountries:any[];  // لو هعمل سليكت بوكس عادي واعمل لوب علييهم 
  alldata:any [];// data of all countries to looping it in table 

//new stats
  NewConfirmed:number=0;
  NewDeaths:number=0;
  NewRecovered:number=0;
//all stats
  TotalConfirmed:number=0;
  TotalDeaths:number=0;
  TotalRecovered:number=0;
//to show img and table
  show_img:boolean=false;
  show_table:boolean=false;
//today date
todayDate;

  constructor(private ser:CoronaService) { }
    ngOnInit(): void {
      this.ser.summary().subscribe(data =>{
        let date=data.Date;
        this.todayDate=date;
        //console.log(data);
        let countries=data.Countries //get countries only
        //this.allcountries=countries;// if i make select box and loooping on it     
        for(let country of countries){ //get country and make loop and push it to data array
          this.data.push(country.Country);// to send it to selectbox liberary
        }
      })
    }


    //start function 
    countryname(country){ //from </> function
      this.countryName=country; // send it to var to get it in the test loop
      this.show_img=true;//show img
      this.ser.summary().subscribe(data =>{
        let countries=data.Countries //get countries only   
        console.log(countries);
        
        for(let country of countries){ //get country and make loop and test it 
          if(this.countryName == country.Country ){
            this.NewConfirmed=country.NewConfirmed;
            this.NewDeaths=country.NewDeaths;
            this.NewRecovered=country.NewRecovered;
            //start Totals 
            this.TotalConfirmed=country.TotalConfirmed;
            this.TotalDeaths=country.TotalDeaths;
            this.TotalRecovered=country.TotalRecovered;
            //start country Code
            this.countryCode=country.CountryCode;
          }
        }
      })
      //show detalis data in the table form alldata() function
      this.ser.Alldata(country).subscribe(data =>{
      this.alldata=data; //send to alldata variable to show it in the table
        /* old way to show last stats 
        let index=data.length -1;// to get last index    
        //send to my variables
        this.AllConfirmed =data[index].Confirmed;//last index of this name 
        this.AllRecovered =data[index].Recovered;//last index of this name 
        this.AllActives =data[index].Active;//last index of this name 
        this.AllDeaths =data[index].Deaths;//last index of this name 
         */
      })
    }


    //start show table

    sh_table(){
      if(this.show_img == true){
        this.show_table=true;
      }
    }
    hid_table(){
      this.show_table=false;
    }
}
