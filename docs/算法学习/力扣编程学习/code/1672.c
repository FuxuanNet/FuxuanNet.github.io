int maximumWealth(int **accounts, int accountsSize, int *accountsColSize)
{
    int max = 0;
    for (int i = 0; i < accountsSize; i++)
    {
        int money = 0;
        for (int j = 0; j < accountsColSize[i]; j++)
        {
            money += accounts[i][j];
        }
        if (money > max)
        {
            max = money;
        }
    }
    return max;
}