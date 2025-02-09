#include <stdlib.h>

int *plusOne(int *digits, int digitsSize, int *returnSize)
{
    // 从最低位开始加一
    for (int i = digitsSize - 1; i >= 0; i--)
    {
        if (digits[i] < 9)
        {
            digits[i]++; // 直接加一
            *returnSize = digitsSize;
            return digits;
        }
        digits[i] = 0; // 当前位为 9，加一后变为 0
    }

    // 如果最高位进位，需要扩展数组
    int *result = (int *)malloc((digitsSize + 1) * sizeof(int));
    result[0] = 1; // 最高位为 1
    for (int i = 1; i < digitsSize + 1; i++)
    {
        result[i] = 0; // 其他位为 0
    }
    *returnSize = digitsSize + 1;
    return result;
}