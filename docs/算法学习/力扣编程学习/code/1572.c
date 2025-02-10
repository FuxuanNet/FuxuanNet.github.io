int diagonalSum(int **mat, int matSize, int *matColSize)
{
    int ret = 0;
    for (int i = 0; i < matSize; i++)
    {
        ret += mat[i][i];
        ret += mat[i][matSize - i - 1];
        if (i == matSize - i - 1)
        {
            ret -= mat[i][i];
        }
    }
    // if (matSize % 2 == 1)
    // {
    //     ret -= mat[matSize / 2][matSize / 2];
    // }
    return ret;
}