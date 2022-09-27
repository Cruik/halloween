import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'halloween';

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
  }

  no() {
    if(this.name.length > 2){
      if (confirm('Bist du dir sicher?')) {
        this.hasNotAnswered = !this.hasNotAnswered;
      }
    }else{

    }  
    console.log(this.name);  
    console.log(this.text);  
  }
}
