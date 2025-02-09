#include <stdio.h>
#define bool int
#define true 1
#define false 0

bool isMonotonic(int *nums, int numsSize)
{
    int res1 = 0, res2 = 0;
    for (int i = 0; i < numsSize - 1; i++)
    {
        if (nums[i] - nums[i + 1] >= 0)
        {
            // printf("big 0  %d\n", nums[i] - nums[i + 1]);
            res1 += 1;
            // printf("res1: %d\n", res1);
        }
        if (nums[i] - nums[i + 1] <= 0)
        {
            // printf("small 0  %d\n", nums[i] - nums[i + 1]);
            res2 += 1;
            // printf("res2: %d\n", res2);
        }
    }
    // printf("Final res1 and res2: %d and %d", res1, res2);

    if (res1 == numsSize - 1 || res2 == numsSize - 1)
    {
        return true;
    }
    return false;
}

int main()
{
    int nums[] = {6, 5, 4, 4};
    int res = isMonotonic(nums, 4);
    printf("res: %d", res);
}