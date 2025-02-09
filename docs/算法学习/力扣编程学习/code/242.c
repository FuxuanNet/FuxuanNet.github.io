#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define bool int
#define true 1
#define false 0

bool isAnagram(char *s, char *t)
{
    int len1 = strlen(s);
    int len2 = strlen(t);
    int table1[26], table2[26];

    for (int i = 0; i < len1; i++)
    {
        table1[s[i] - 'a'] += 1;
    }
    for (int i = 0; i < len2; i++)
    {
        table2[t[i] - 'a'] += 1;
    }
    for (int i = 0; i < 26; i++)
    {
        if (table1[i] != table2[i])
        {
            return false;
        }
    }
    return true;
}