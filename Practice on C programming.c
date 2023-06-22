#include <stdio.h>
int main ()
{
int num1;
int num2;
printf("Enter First Number\n");
scanf("%d", & num1);
printf("Enter Second Number\n");
scanf("%d", & num2);
int sum = num1 + num2;
int sub = num1 - num2;
int mult = num1 * num2;
printf("%d + %d = %d \n", num1, num2, sum);
printf("%d - %d = %d \n", num1, num2, sub);
printf("%d * %d = %d \n", num1, num2, mult);
return 0;
}
