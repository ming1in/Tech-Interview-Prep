public class fibonacci {
  //using recursion 
  //time -> O(n) 
  //space -> O(2^n), bc fib_rec is ran twice

  static int fib_rec(int num) {
    //base cases
    if (num == 1) {
      return 0;
    }

    if (num == 2) {
      return 1;
    }

    return fib_rec(num - 1) + fib_rec(num - 2);
  }

  



  
  public static void main(String[] args) {
    System.out.println( fib_rec(5));
  }
}