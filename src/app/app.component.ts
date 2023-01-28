import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Algo_and_Data_Struct_JS';
  
  
  ngOnInit(): void {
    console.log(this.fibbonaci(10));
    console.log(this.factorial(5));
    console.log(this.isPrime(8));
  }

  fibbonaci(n:number) {
    const fib =[0,1]
    for(let i=2; i<n; i++){
      fib[i] = fib[i-1] + fib[i-2];
    }
    return fib;
  }

  factorial(n:number) {
    let result = 1;
    for(let i=2;i<=n;i++){
      result = result * i;  
    }
    return result;
  }

  isPrime(n:number){
    if(n<2){
      return false;
    }
    for(let i=2;i<n;i++){
      if(n%i===0){
        return false;
      }
    }
    return true;
  }
}
