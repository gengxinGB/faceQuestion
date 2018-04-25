#include<stdio.h>
#include<string.h>
#define MAXSIZE 1000

char str[MAXSIZE];
char res[MAXSIZE];


int main()
{
    int i;
    scanf("%s",str);
    int len = strlen(str);
    int max = 0;
    int id = MAXSIZE;
    for(i=len-1; i>=0; i--)
    {
        if(str[i]>=max)
        {
            res[--id] = str[i];
            max = str[i];
        }
    }
    for(i=id; i<MAXSIZE; i++)
    {
        printf("%c",res[i]);
    }
    printf("\n");
}
