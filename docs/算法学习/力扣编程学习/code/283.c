#include <stdio.h>

void moveZeroes(int *nums, int numsSize)
{
    int s = 0;
    for (int i = 0; i < numsSize; i++)
    {
        if (nums[i] != 0)
        {
            nums[s++] = nums[i];
        }
    }
    for (int i = s; i < numsSize; i++)
    {
        nums[s++] = 0;
    }
}