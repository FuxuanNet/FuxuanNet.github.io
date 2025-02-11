---
title: 50Pow(x, n)
date: 2025-02-11
details: 编程基础 0 到 1
---

::: tip
实现 `pow(x, n)` ，即计算 `x` 的整数 `n` 次幂函数（即，$x^n$ ）。
:::

一开始我的思路是递归，结果栈满了...

```c
double myPow(double x, int n) {
    if (n == 0) {
        return 1;
    } else if (n > 0) {
        return x * myPow(x, n - 1);
    } else {
        return 1 / x * myPow(x, n + 1);
    }
}
```

后来看题解知道有一种快速幂算法。

- 当我们要计算 $x^n$ 时，可以先递归地计算 $x^{[\frac n 2]}$，向下取整，然后根据 $n$ 的奇偶性决定是否再乘一个 $x$。

- 根据递归的结果，如果 $n$ 为偶数，那么 $x^n = y^2$；如果 $n$ 为奇数，那么 $x^n = y^2 \times x$。

- 递归的边界为 $n=0$，任意数的 0 次方均为 1.

$$
\text{quickMul}(x, N) =
\begin{cases}
1 & \text{if } N = 0 \\
\left( \text{quickMul}(x, \frac{N}{2}) \right)^2 & \text{if } N \text{ is even} \\
\left( \text{quickMul}(x, \frac{N}{2}) \right)^2 \cdot x & \text{if } N \text{ is odd}
\end{cases}
$$

把函数名简化为 `f` 更好记忆些:

$$
f(x, N) =
\begin{cases}
1 & \text{if } N = 0 \\
f^2(x, \frac{N}{2})  & \text{if } N \text{ is even} \\
 x \cdot f^2(x, \frac{N}{2})  & \text{if } N \text{ is odd}
\end{cases}
$$

<<< ./code/50.c
