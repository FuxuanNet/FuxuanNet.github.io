#include <stdio.h>

int arraySign(int *nums, int numsSize)
{
    int unSignCount = 0;
    for (int i = 0; i < numsSize; i++)
    {
        if (nums[i] == 0)
        {
            return 0;
        }
        else if (nums[i] < 0)
        {
            unSignCount++;
        }
    }
    if (unSignCount % 2 == 0)
    {
        return 1;
    }
    return -1;
}