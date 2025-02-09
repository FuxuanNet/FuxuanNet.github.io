#include <string.h>
#include <stdio.h>
#include <stdlib.h>

int strStr(char *haystack, char *needle)
{
    char *res;
    res = strstr(haystack, needle);
    if (res == NULL)
    {
        return -1;
    }
    else
    {
        return (int)(res - haystack);
    }
}

int main()
{
    system("chcp 65001");
    int result1, result2;
    result1 = strStr("sadbutsad", "sad");
    result2 = strStr("leetcode", "leeto");
    printf("第一个结果是 %d 第二个结果是 %d", result1, result2);
}
