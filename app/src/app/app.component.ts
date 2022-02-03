import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cost: number=0 ;
  from = 'Dollar';
  to = 'Dollar';
  result?: number=0;
  
convertUnit: { [name: string]: number } = {"Dollar" :10, "Euro": 8, "Sterling": 6.5, "Turkish Lira": 5}; //Oran yakalamak için hepsinin bağımsız bir değişkene göre değerini tutdum.

  convert(_from: string, _to: string, _cost: number) {
    let multiplier: number = _cost*(this.convertUnit[_to]/this.convertUnit[_from]);

      if (_from==_to ) {
      this.result=this.cost;
    }else{
      this.result= multiplier;
    }
  }
}
