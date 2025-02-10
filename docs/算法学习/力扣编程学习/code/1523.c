int countOdds(int low, int high)
{
    int ret = 0;
    ret = (high + 1) / 2 - (low) / 2;
    return ret;
}