#include <cstdio>
#include <vector>
#include<algorithm>

using namespace std;

class Solution
{
public:
    // 判断数组arr是否可以构成等差数列
    bool canMakeArithmeticProgression(vector<int> &arr)
    {
        // 对数组进行排序
        sort(arr.begin(), arr.end());
        // 计算等差数列的公差
        int diff = arr[1] - arr[0];
        // 遍历数组，判断每个相邻元素的差是否等于公差
        for (int i = 1; i < arr.size() - 1; i++)
        {
            if (arr[i + 1] - arr[i] != diff)
            {
                return false;
            }
        }
        return true;
    }
};