import java.util.Scanner;

// class
public class GeometryArea {
    public static void main(String[] args) {
        Scanner read = new Scanner(System.in);
        Rectangle rect = 

        // Object
        Circle cir = new Circle();

        System.out.println(">> enter values for r and h respectively: ");
        double r = read.nextDouble();
        double h = read.nextDouble();

        // 2#r h
        double surfaceArea = (2 * cir.area(r)) + (rect.area(cir.circumference(r), h));
        System.out.println("The total surface area is: " + surfaceArea);

        System.out.println("area of the circle at the end of the cylinder: " + cir.area(r));
    }
}
