#include <stdio.h>
#include <stdlib.h>
#include <string.h>

char findTheDifference(char *s, char *t)
{
    int len1 = strlen(s);
    int len2 = strlen(t);
    int result1 = 0;
    int result2 = 0;
    for (int i = 0; i < len1; i++)
    {
        result1 += s[i];
    }
    for (int i = 0; i < len2; i++)
    {
        result2 += t[i];
    }
    return result2 - result1;
}