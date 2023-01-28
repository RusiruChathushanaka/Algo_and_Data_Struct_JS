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
    console.log(this.recursiveFactorial(5));
    console.log(this.linearSearch([1,2,3,4,5,6,7,8,9,10], 5));
    console.log(this.binarySearch([1,2,3,4,5,6,7,8,9,10], 8));
    console.log(this.recursiveBinarySearch([1,2,3,4,5,6,7,8,9,10], 9));
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

  //Factorial

  recursiveFactorial(n:number): number{
    if(n===0){
      return 1;
    }
    return n * this.recursiveFactorial(n-1);
  }

  //searching Algorithms

  //Linear Search

  linearSearch(arr:number[], n:number){
    for(let i=0;i<arr.length;i++){
      if(arr[i]===n){
        return i;
      }
    }
    return -1;
  }

  //binary search

  binarySearch(arr:number[], n:number){
    let start = 0;
    let end = arr.length-1;
    
    while(start<=end){
      let mid = Math.floor((start+end)/2);
      if(arr[mid]===n){
        return mid;
      }
      if(arr[mid]<n){
        start = mid+1;
      }else{
        end = mid-1;
      }
    }
    return -1;
  }

  //Recursive Binary Search

  recursiveBinarySearch(arr:number[], n:number){
    return this.Search(arr, n, 0, arr.length-1);
  }

  Search(arr:number[], n:number, start:number, end:number): number{
    if(start>end){
      return -1;
    }
    let mid = Math.floor((start+end)/2);
    if(arr[mid]===n){
      return mid;
    }
    if(arr[mid]<n){
      return this.Search(arr, n, mid+1, end);
    }else{
      return this.Search(arr, n, start, mid-1);
    }
  }

}
