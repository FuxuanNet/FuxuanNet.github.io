#include <stdio.h>
#include <stdlib.h>
#include <string.h>

char *mergeAlternately(char *word1, char *word2)
{
    int len1 = strlen(word1);
    int len2 = strlen(word2);
    char *result = (char *)malloc(len1 + len2 + 1);
    for (int i = 0; i < len1 + len2 + 1; i++)
    {
        result[i] = '\0';
    }

    int i = 0;
    int j = 0;
    int k = 0;
    while (i < len1 && j < len2)
    {
        result[k++] = word1[i++];
        result[k++] = word2[j++];
    }
    if (len1 == len2)
    {

        return result;
    }
    else if (len1 > len2)
    {
        for (; i < len1; )
        {
            result[k++] = word1[i++];
        }
        return result;
    }
    else
    {
        for (; j < len2; )
        {
            result[k++] = word2[j++];
        }
        return result;
    }
}

int main()
{
    char *result = mergeAlternately("ab", "pqrs");
    printf("%s", result);
    free(result);
    return 0;
}