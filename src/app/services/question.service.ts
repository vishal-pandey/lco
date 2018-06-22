import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor() { }


// Solution of questions in C Language

qc1 = `
	#include <stdio.h>

	int main()
	{
	   int n, r = 0, t;
	 
	   printf("Enter a number to check if it is a palindrome or not\\n");
	   scanf("%d", &n);
	 
	   t = n;
	 
	   while (t != 0)
	   {
	      r = r * 10;
	      r = r + t%10;
	      t = t/10;
	   }
	 
	   if (n == r)
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
    int n = 10;
    int first = 0, second = 1, next, i;
   
    printf("First 10 no in fibonacce series is");
   
    for (i = 0; i < n; i++)
    {
      if (i <= 1)
        next = i;
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
	  int i, n, fact = 1;
	 
	  printf("Enter number to find factorial of\\n");
	  scanf("%d", &n);
	 
	  for (i = 1; i <= n; i++)
	    fact = fact * i;
	 
	  printf("Factorial of %d = %d\\n", n, fact);
	 
	  return 0;
	}
`;

qc4 = `
	#include <stdio.h>
		 
	int main()
	{
	  int n=10, i, j, swap;
	  int arr[] = {5,2,1,4,6,7,8,9,0,10};
	 
	 
	  for (i = 0 ; i < n - 1; i++)
	  {
	    for (j = 0 ; j < n - i - 1; j++)
	    {
	      if (arr[j] > arr[j+1]) 
	      {
	        swap       = arr[j];
	        arr[j]   = arr[j+1];
	        arr[j+1] = swap;
	      }
	    }
	  }
	 
	  printf("Array sorted by bubble sort is :\\n");
	 
	  for (i = 0; i < n; i++)
	     printf("%d\\n", arr[i]);
	 
	  return 0;
	}
`;

qc5 = `
  #include <stdio.h>

  int main(int argc, char const *argv[])
  {
    int n = 10, i, j, swap;
    int arr[] = {5,2,1,4,6,7,8,9,0,10};
    for (i = 0 ; i < 3; i++) // only 3 iteration is required
    {
      for (j = 0 ; j < n - i - 1; j++)
      {
        if (arr[j] > arr[j+1])
        {
          swap       = arr[j];
          arr[j]   = arr[j+1];
          arr[j+1] = swap;
        }
      }
    }
    printf("Third largest number in list is \\n");
    printf("%d\\n", arr[n-3]);
    return 0;
  }
`;


// Solution of questions in java Language

qj1 = `
	public class PalindromeNumber{  
		public static void main(String args[]){  
			int n , r = 0, t;
			
			n=123454321; // let the number to check for palindrome is 123454321
			  
		  t = n;
		  while (t != 0)
		  {
		    r = r * 10;
		    r = r + t%10;
		    t = t/10;
		  }    
		  if(n == r)    
		   System.out.println("123454321 is palindrome number ");    
		  else    
		   System.out.println("123454321 not palindrome");    
		}  
	}
`;

qj2 = `
	public class FibonacciSeries{  
	  public static void main(String args[])  
	  {    
	    int n = 10;
	    int first = 0, second = 1, next, i;

	    System.out.print("First 10 no in fibonacce series is");
	    
	    for (i = 0; i < n; i++)
	    {
	      if (i <= 1)
	        next = i;
	      else
	      {
	        next = first + second;
	        first = second;
	        second = next;
	      }
	      System.out.println(next);
	    }    
	  }
	}
`;

qj3 = `
	public class FactorialNumber{  
	  public static void main(String args[]){  

	    int i, n, fact = 1;
	    n = 5; //Let the number of which we want factorial is 5
	    
	    for (i = 1; i <= n; i++)
	      fact = fact * i;

	    System.out.println("Factorial of 5 is: "+fact);    
	  }  
	}
`;

qj4 = `
	public class BubbleSort {
	  public static void main(String[] args) {
	    int arr[] = {5,2,1,4,6,7,8,9,0,10};
	    int i , j , swap, n = 10;
	    
	    for (i = 0 ; i < n - 1; i++)
	    {
	      for (j = 0 ; j < n - i - 1; j++)
	      {
	        if (arr[j] > arr[j+1])
	        {
	          swap       = arr[j];
	          arr[j]   = arr[j+1];
	          arr[j+1] = swap;
	        }
	      }
	    }
	    System.out.println("Array sorted by bubble sort is");
	    for(i=0; i < arr.length; i++)
	      System.out.print(arr[i] + " ");
	  }
	}
`;

qj5 = `
	public class ThirdLargest {  
	  static void bubbleSort(int[] arr) {  
	    int n = arr.length;  
	    int temp = 0;  
	    for(int i=0; i < 3; i++){  //only 3 iteration is required
	      for(int j=1; j < (n-i); j++){  
	        if(arr[j-1] > arr[j]){  
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

	// Json of questions which would come from RestAPI in real app

  questions = [
	 	{
	 		id: "1",
	  	title: "Palindrome Program",
	  	thequestion: "Write a program to check if a number is pallindrome or not.",
	  	description: "A palindrome number is a number which remains the same when reversed. To check whether a number is a palindrome or not first we reverse it and then compare the number obtained with the original number, if both are same then the number is palindrome otherwise not.",
	  	solution: {
	  		c: this.qc1,
	  		java: this.qj1
	  	}
	  },
	  {
	  	id: "2",
	  	title: "Fibonacci Series",
	  	thequestion: "Write a program to generate a fibonacci series.",
	  	description: "Fibonacci series is a special kind of sequence which generate a unique pattern,starting from 0 and 1 every next number in fibonacci series is generated by adding the previous two number in series i.e. 0, 1, 1, 2, 3, 5, 8 ... this can be coded using for loop easily by printing i for i < 1 else printing sum of previous number in loop.",
	  	solution: {
	  		c: this.qc2,
	  		java: this.qj2
	  	}
	  },
	  {
	  	id: "3",
	  	title: "Factorial Number",
	  	thequestion: "Write a program to find the factorial number.",
	  	description: "Factorial of a number is obtained by multiplying in the sequence starting from 1 to the number of which we want to find factorial of. This can be coded using for loop starting from 1 to the number and multiplying continously by the index (i). Other methods for calculating this is by recursion.",
	  	solution: {
	  		c: this.qc3,
	  		java: this.qj3
	  	}
	  },
	  {
	  	id: "4",
	  	title: "Bubble Sort",
	  	thequestion: "Write a program to sort an array using bubble sort technique.",
	  	description: "Bubble sort is a sorting technique in which starting from start and comparing every two number in sequence if it is not in order then it is swaped in this way in every iteration the largest number move to the last and the iteration limit is shortened. This can be coded easily using two for loop one inside the other and continue swaping if not in order after exiting from the both the for loop the array or series get ordered.",
	  	solution: {
	  		c: this.qc4,
	  		java: this.qj4
	  	}
	  },
	  {
	  	id: "5",
	  	title: "Find 3rd largest number in an array.",
	  	thequestion: "Write a program to find the 3rd largest number in an array",
	  	description: "To find the third largest number in a series we can first arange the array in accending order order using bubble sort but only for up to the 3 iteration because as we know after every iteration in bubble sort largest number reaches at its appropriate position so third largest can be printed by printing [n-3] th location in array.",
	  	solution: {
	  		c: this.qc5,
	  		java: this.qj5
	  	}
	  }
  ]

  // Function to fetch question with solution in HomeComponent 
  //In real app this function would fetch json data from server using rest api
  getQuestion(){
  	return this.questions;
  }
}
