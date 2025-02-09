#include <stdio.h>
#include <stdlib.h>
#define bool int
#define true 1
#define false 0

bool canMakeArithmeticProgression(int *arr, int arrSize)
{
    for (int i = 0; i < arrSize - 1; i++)
    {
        for (int j = 0; j < arrSize - 1 - i; j++)
        {
            if (arr[j] >= arr[j + 1])
            {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    int res = arr[1] - arr[0];
    for (int i = 0; i < arrSize - 1; i++)
    {
        if (arr[i + 1] - arr[i] != res)
        {
            return false;
        }
    }
    return true;
}

int main(){
    int arr[] = {3, 5, 1};
    canMakeArithmeticProgression(arr, 3);

}