#include <stdio.h>

/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int *spiralOrder(int **matrix, int matrixSize, int *matrixColSize, int *returnSize)
{
    if (matrixSize == 0 || matrixColSize[0] == 0)
    {
        *returnSize = 0;
        return NULL;
    }

    int rows = matrixSize, columns = matrixColSize[0];
    int total = rows * columns;
    int *order = malloc(sizeof(int) * total);
    *returnSize = 0;

    int left = 0, right = columns - 1, top = 0, bottom = rows - 1;
    while (left <= right && top <= bottom)
    {
        for (int column = left; column <= right; column++) // 从左到右遍历上侧元素，从 (top, left) 到 (top, right)。
        {
            order[(*returnSize)++] = matrix[top][column];
        }
        for (int row = top + 1; row <= bottom; row++) // 从上到下遍历下侧元素，从 (top + 1, right) 到 (bottom, right)。
        {
            order[(*returnSize)++] = matrix[row][right];
        }
        if (left != right && top != bottom) // 如果有多行多列，遍历下侧和左侧元素
        {
            for (int column = right - 1; column > left; column--) // 从右往左遍历下侧元素，从 (bottom, right - 1) 到 (bottom, left + 1)
            {
                order[(*returnSize)++] = matrix[bottom][column];
            }
            for (int row = bottom; row > top; row--) // 从下到上遍历左侧元素，依次为 (bottom, left) 到 (top + 1， left)
            {
                order[(*returnSize)++] = matrix[row][left];
            }
        }
        // 缩短一圈
        left++;
        right--;
        top++;
        bottom--;
    }
    return order;
}