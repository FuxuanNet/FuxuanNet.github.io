#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define bool int
#define true 1
#define false 0

bool repeatedSubstringPattern(char *s)
{
    int len = strlen(s);
    if (len == 0)
        return false;

    // 构造新字符串：s+s 并去掉首尾字符
    char *doubled = (char *)malloc(2 * len + 1); // 修正：分配 2*len + 1 的空间
    strcpy(doubled, s);
    printf("strcpy: %s", doubled);
    strcat(doubled, s);
    printf("strcat: %s", doubled);

    // 去掉首尾字符
    doubled[2 * len - 1] = '\0'; // 去掉最后一个字符
    char *newStr = doubled + 1;  // 去掉第一个字符

    // 检查原字符串是否是新字符串的子串
    bool res = (strstr(newStr, s) != NULL);
    free(doubled);
    return res;
}

int main(void) {
    repeatedSubstringPattern("abcabcabcabc");
}