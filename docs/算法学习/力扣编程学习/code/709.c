#include <stdlib.h>
#include <stdio.h>
#include <string.h>

char *toLowerCase(char *s)
{
    char *newS = malloc((strlen(s) + 1) * sizeof(char));
    if (newS == NULL)
    {
        return NULL;
    }

    for (int i = 0; i < strlen(s) + 1; i++)
    {
        newS[i] = '\0';
    }

    for (int i = 0; i < strlen(s); i++)
    {
        if (65 <= s[i] && s[i]  <= 90)
        {
            newS[i] = s[i] + ('a' - 'A');
        }
        else
        {
            newS[i] = s[i];
        }
    }
    return newS;
}
