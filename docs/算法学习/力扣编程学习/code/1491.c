double average(int *salary, int salarySize)
{
    int sum = 0;
    int min = 1000001, max = 0;
    for (int i = 0; i < salarySize; i++)
    {
        if (salary[i] > max)
        {
            max = salary[i];
        }
        if (salary[i] < min)
        {
            min = salary[i];
        }
    }
    for (int i = 0; i < salarySize; i++)
    {
        sum += salary[i];
    }
    return (sum - min - max) * 1.0 / (salarySize - 2);
}