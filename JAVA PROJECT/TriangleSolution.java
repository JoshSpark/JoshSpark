import java.util.Scanner;

public class TriangleSolution {
   public static void main(String[] args) {
      Scanner input = new Scanner(System.in);
      System.out.print("Enter the length of side a: ");
      double a = input.nextDouble();
      System.out.print("Enter the length of side b: ");
      double b = input.nextDouble();
      System.out.print("Enter the length of side c: ");
      double c = input.nextDouble();

      // Check if the input values form a valid triangle
      if (a + b <= c || a + c <= b || b + c <= a) {
         System.out.println("These side lengths cannot form a valid triangle.");
      } else {
         double s = (a + b + c) / 2;
         double area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

         System.out.println("The area of the triangle is: " + area);
      }
      input.close();
   }
}


