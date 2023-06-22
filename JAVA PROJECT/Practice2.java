import java.util.ArrayList;

public class Practice2 {
    public static void main(String[] args){
        ArrayList<String> list = new ArrayList<String>();

        list.add("Di maria");
        list.add("Joshua");

        for(int i = 0; i < list.size(); i++){
            System.out.println(list.get(i));
        }

        for(String str : list){
                System.out.println(str);
        }
    }
}
