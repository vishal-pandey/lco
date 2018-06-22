import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor() { }


qc1 = `
	#include <stdio.h>
	
	int main()
	{
	   int n, reverse = 0, t;
	 
	   printf("Enter a number to check if it is a palindrome or not\\n");
	   scanf("%d", &n);
	 
	   t = n;
	 
	   while (t != 0)
	   {
	      reverse = reverse * 10;
	      reverse = reverse + t%10;
	      t = t/10;
	   }
	 
	   if (n == reverse)
	      printf("%d is a palindrome number.\\n", n);
	   else
	      printf("%d isn't a palindrome number.\\n", n);
	 
	   return 0;
	}
`;


qc2 = `
	#include <stdio.h>
	 
	int main()
	{
	  int n, first = 0, second = 1, next, c;
	 
	  printf("Enter the number of terms\\n");
	  scanf("%d", &n);
	 
	  printf("First %d terms of Fibonacci series are:\\n", n);
	 
	  for (c = 0; c < n; c++)
	  {
	    if (c <= 1)
	      next = c;
	    else
	    {
	      next = first + second;
	      first = second;
	      second = next;
	    }
	    printf("%d\\n", next);
	  }
	 
	  return 0;
	}
`;


qc3 = `
	#include <stdio.h>
	 
	int main()
	{
	  int c, n, fact = 1;
	 
	  printf("Enter a number to calculate its factorial\\n");
	  scanf("%d", &n);
	 
	  for (c = 1; c <= n; c++)
	    fact = fact * c;
	 
	  printf("Factorial of %d = %d\\n", n, fact);
	 
	  return 0;
	}
`;


qc4 = `
	#include <stdio.h>
	 
	int main()
	{
	  int array[100], n, c, d, swap;
	 
	  printf("Enter number of elements\\n");
	  scanf("%d", &n);
	 
	  printf("Enter %d integers\\n", n);
	 
	  for (c = 0; c < n; c++)
	    scanf("%d", &array[c]);
	 
	  for (c = 0 ; c < n - 1; c++)
	  {
	    for (d = 0 ; d < n - c - 1; d++)
	    {
	      if (array[d] > array[d+1]) /* For decreasing order use < */
	      {
	        swap       = array[d];
	        array[d]   = array[d+1];
	        array[d+1] = swap;
	      }
	    }
	  }
	 
	  printf("Sorted list in ascending order:\\n");
	 
	  for (c = 0; c < n; c++)
	     printf("%d\\n", array[c]);
	 
	  return 0;
	}
`;




qc5 = `
	#include <stdio.h>

	int main(int argc, char const *argv[])
	{
		int n = 10, c, d, swap;
		int arr[] = {5,2,1,4,6,7,8,9,0,10};
		for (c = 0 ; c < n - 1; c++)
	  {
	    for (d = 0 ; d < n - c - 1; d++)
	    {
	      if (arr[d] > arr[d+1]) /* For decreasing order use < */
	      {
	        swap       = arr[d];
	        arr[d]   = arr[d+1];
	        arr[d+1] = swap;
	      }
	    }
	  }
		printf("%d\\n", arr[n-3]);
		return 0;
	}
`;







qj1 = `
	class PalindromeExample{  
	 public static void main(String args[]){  
	  int r,sum=0,temp;    
	  int n=454;//It is the number variable to be checked for palindrome  
	  
	  temp=n;    
	  while(n>0){    
	   r=n%10;  //getting remainder  
	   sum=(sum*10)+r;    
	   n=n/10;    
	  }    
	  if(temp==sum)    
	   System.out.println("palindrome number ");    
	  else    
	   System.out.println("not palindrome");    
	 }  
	}
`;

qj2 = `
	class FibonacciExample1{  
		public static void main(String args[])  
		{    
		 int n1=0,n2=1,n3,i,count=10;    
		 System.out.print(n1+" "+n2);//printing 0 and 1    
		    
		 for(i=2;i<count;++i)//loop starts from 2 because 0 and 1 are already printed    
		 {    
		  n3=n1+n2;    
		  System.out.print(" "+n3);    
		  n1=n2;    
		  n2=n3;    
		 }    
		}
	}
`;

qj3 = `
	class FactorialExample{  
		public static void main(String args[]){  
		int i,fact=1;  
		int number=5;//It is the number to calculate factorial    
		for(i=1;i<=number;i++){    
		    fact=fact*i;    
		}    
		System.out.println("Factorial of "+number+" is: "+fact);    
		}  
	}
`;

qj4 = `
	public class BubbleSortExample {  
		static void bubbleSort(int[] arr) {  
		  int n = arr.length;  
		  int temp = 0;  
			for(int i=0; i < n; i++){  
				for(int j=1; j < (n-i); j++){  
					if(arr[j-1] > arr[j]){  
					  //swap elements  
					  temp = arr[j-1];  
					  arr[j-1] = arr[j];  
					  arr[j] = temp;  
					}          
				}  
			}  
		}  
		public static void main(String[] args) {  
	    int arr[] ={3,60,35,2,45,320,5};  
	     
	    System.out.println("Array Before Bubble Sort");  
	    for(int i=0; i < arr.length; i++){  
	      System.out.print(arr[i] + " ");  
	    }  
	    System.out.println();  
	      
	    bubbleSort(arr);//sorting array elements using bubble sort  
	     
	    System.out.println("Array After Bubble Sort");  
	    for(int i=0; i < arr.length; i++){  
	      System.out.print(arr[i] + " ");  
	    }  
		}  
	}
`;

qj5 = `
	public class ThirdLargest {  
	  static void bubbleSort(int[] arr) {  
	    int n = arr.length;  
	    int temp = 0;  
			for(int i=0; i < n; i++){  
				for(int j=1; j < (n-i); j++){  
	        if(arr[j-1] > arr[j]){  
						//swap elements  
						temp = arr[j-1];  
						arr[j-1] = arr[j];  
						arr[j] = temp;  
	       }      
				}  
			}  
	  }  
		public static void main(String[] args) {  
	    int arr[] ={5,2,1,4,6,7,8,9,0,10};    
	    bubbleSort(arr);
	    System.out.println(arr[arr.length-3]);
		}  
	}
`;

  questions = [
	 	{
	 		id: "1",
	  	title: "Palindrome Program",
	  	thequestion: "Write a program to check if a number is pallindrome or not",
	  	description: "A palindrome number is a which remains the same on reversal. For example, some palindrome numbers are 8, 121, 212, 12321, -454. To check whether a number is a palindrome or not first we reverse it and then compare the number obtained with the original number, if both are same then the number is palindrome otherwise not.",
	  	solution: {
	  		c: this.qc1,
	  		java: this.qj1
	  	}
	  },
	  {
	  	id: "2",
	  	title: "Fibonacci Series",
	  	thequestion: "Write a program to generate a fibonacci series",
	  	description: "Program for Fibonacci series using a loop and recursion. Using the code below you can print as many terms of the series as required. Numbers of this sequence are known as Fibonacci numbers. The first few numbers of the series are 0, 1, 1, 2, 3, 5, 8, ...,. Except for the first two terms of the sequence, every other term is the sum of the previous two terms, for example, 8 = 3 + 5 (addition of 3 and 5). This sequence has many applications in Mathematics and Computer Science.",
	  	solution: {
	  		c: this.qc2,
	  		java: this.qj2
	  	}
	  },
	  {
	  	id: "3",
	  	title: "Factorial Number",
	  	thequestion: "Write a program to find the factorial number",
	  	description: "Program to find and print factorial of a number, three methods are given, the first one uses for loop, the second uses a function to find factorial and the third uses recursion. Factorial is represented using '!', so five factorial will be written as (5!), n factorial as (n!). Also, n! = n*(n-1)*(n-2)*(n-3)...3.2.1 and zero factorial is defined as one i.e. 0! = 1.",
	  	solution: {
	  		c: this.qc3,
	  		java: this.qj3
	  	}
	  },
	  {
	  	id: "4",
	  	title: "Bubble Sort",
	  	thequestion: "Write a program to sort an array using bubble sort technique",
	  	description: "Programming code for bubble sort to sort numbers or arrange them in ascending order. You can modify it to print numbers in descending order.You can also sort strings using Bubble sort, it is less efficient as its average and worst case complexity is high, there are many other fast sorting algorithms like quick-sort, heap-sort, etc. Sorting simplifies problem-solving in computer programming.",
	  	solution: {
	  		c: this.qc4,
	  		java: this.qj4
	  	}
	  },
	  {
	  	id: "5",
	  	title: "Find 3rd largest number in an array",
	  	thequestion: "Write a program to find the 3rd largest number in an array",
	  	description: "Description5",
	  	solution: {
	  		c: this.qc5,
	  		java: this.qj5
	  	}
	  }
  ]

  getQuestion(){
  	return this.questions;
  }
}
