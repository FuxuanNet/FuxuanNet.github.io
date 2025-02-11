double quickMul(double, long long);

// 定义一个函数，用于计算 x 的 n 次方
double myPow(double x, int n)
{
    // 将 n 转换为 long long 类型，防止溢出
    long long N = n;
    return N >= 0 ? quickMul(x, N) : 1.0 / quickMul(x, -N);

}

// 快速幂算法，用于计算 x 的 N 次方
double quickMul(double x, long long N) {
    // 如果 N 为 0，则返回 1.0
    if (N == 0)
    {
        return 1.0;
    }
    // 递归计算 x 的 N/2 次方
    double y = quickMul(x, N / 2);
    // 如果 N 为偶数，则返回 y*y
    // 如果 N 为奇数，则返回 y*y*x
    return N % 2 == 0 ? y * y : y * y * x;
}