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
    console.log(this.isPowerOfTwo(32));
    console.log(this.isPowerofTwoBitwise(32));
    console.log(this.recursiveFibonacci(6));
  }

  //Mathematical Algorithms

  //Fionacci Series

  fibbonaci(n:number) {
    const fib =[0,1]
    for(let i=2; i<n; i++){
      fib[i] = fib[i-1] + fib[i-2];
    }
    return fib;
  }

  //Factorial

  factorial(n:number) {
    let result = 1;
    for(let i=2;i<=n;i++){
      result = result * i;  
    }
    return result;
  }

  //Prime Number

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

  //Power of Two

  isPowerOfTwo(n:number){
    if(n<1){
      return false;
    }
    while(n>1){
      if(n%2!==0){
        return false;
      }
      n = n/2;
    }
    return true;
  }

  //Power of Two Bitwise

  isPowerofTwoBitwise(n:number){
    if(n<1){
      return false;
    }
    return (n & (n-1)) === 0;
  }

  //Recursive Algorithms

  //Fibonacci Series

  recursiveFibonacci(n:number): number{
    if(n<2){
      return n;
    }
    return this.recursiveFibonacci(n-1) + this.recursiveFibonacci(n-2);
  }

}
