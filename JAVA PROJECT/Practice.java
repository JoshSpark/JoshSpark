import java.util.Scanner;

import org.w3c.dom.Node;

public class Practice{
    public static void main(String[] args){
        
        String name = "I have mastered string manipulation in java";

        System.out.println(name.charAt(4));


        /*if(condition){
            // statement
        } else{
            // statement
        }

        for(initialisation; condition; update){
            // statement
        }

        while(condition){
            // statement
        }

        do{
            // statement
        } while(condition);*/

        String msg = "tphqics{ [izs& 5aA xm9o3vHiYet!%!";
        String decoded = "";

        for(int i = 0; i < msg.length(); i++)
            if(i % 2 == 0)
                decoded += msg.charAt(i);


        System.out.println(decoded);


        int [][] num = {
            {5, 1, 0}, {2, 3, 4}
        };
    }

    // Node class
    private static class Node<AnyType>{
        private AnyType data;
        private Node<AnyType> next;

        Node<AnyType>(AnyType data, Node<AnyType> next){
            this.data = data;
            this.next = next;
        }
    }
}
