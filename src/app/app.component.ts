import { HttpClient , HttpHeaders, HttpParams } from '@angular/common/http';
  
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'halloween';
  constructor(
    private http: HttpClient) { }

  userName: string = "jbond";
  public name: string = '';
  public text: string = '';
  public hasNotAnswered:boolean = true;
  
  inputChange(args:any){
    this.name = args.value;
  }

  inputChange2(args:any){
    this.text = args.value;
  }

  isNameFieldEmpty(){

    return this.name.length < 2;
  }

  yes() {
    this.hasNotAnswered = !this.hasNotAnswered;
    this.sendAnswer('Ja');
  }

  no() {
    if(this.name.length > 2){
      if (confirm('Bist du dir sicher?')) {
        this.hasNotAnswered = !this.hasNotAnswered;
        this.sendAnswer('Nein');
      }
    }else{

    }  
    console.log(this.name);  
    console.log(this.text);  
  }

  functionUrl:string = 'https://lobifunction.azurewebsites.net/api/Halloween?code=C7cogwactb2bQipMQUWFadw5SL8HxaUPwm1AB7HXkuoJAzFuHA770Q==';

  sendAnswer(answer:string){
    let queryParams = new HttpParams();
    queryParams = queryParams.append("name",this.name);
    queryParams = queryParams.append("text" ,this.text);
    queryParams = queryParams.append("answer", answer);

      this.http.get(this.functionUrl,{params:queryParams})
        .pipe(
          tap(_ => this.log('fetched images'))
        ).subscribe(
          ele => {
            console.log("here");
          }
        );
        
  }

  log(arg0: string): void {
  
  }
  
}
