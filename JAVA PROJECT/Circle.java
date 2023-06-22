import java.lang.Math;

public class Circle {
    //final double PI = 3.142;

    public double area(double radius){
        return (Math.PI * radius * radius);
    }

    public double circumference(double raduis){
        return (Math.PI * raduis * 2);
    }
}
