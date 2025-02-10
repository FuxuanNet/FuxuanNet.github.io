#include <stdlib.h>

int calPoints(char **operations, int operationsSize)
{
    int ret = 0;
    int point[1000];
    int pos = 0;
    for (int i = 0; i < 1000; i++)
    {
        point[i] = 0;
    }

    for (int i = 0; i < operationsSize; i++)
    {
        switch (operations[i][0])
        {
        case '+':
            ret += point[pos - 1] + point[pos - 2];
            point[pos++] = point[pos - 1] + point[pos - 2];
            break;
        case 'D':
            ret += point[pos - 1] * 2;
            point[pos++] = point[pos - 1] * 2;
            break;
        case 'C':
            ret -= point[--pos];
            break;
        default:
            ret += atoi(operations[i]);
            point[pos++] = atoi(operations[i]);
            break;
        }
    }
    return ret;
}