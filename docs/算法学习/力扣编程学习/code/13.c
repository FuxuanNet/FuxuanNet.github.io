int romanToInt(char *s)
{
    int roman[128];
    roman['I'] = 1;
    roman['V'] = 5;
    roman['X'] = 10;
    roman['L'] = 50;
    roman['C'] = 100;
    roman['D'] = 500;
    roman['M'] = 1000;

    int ans = 0, i = 0;
    while (s[i])
    {
        int x = roman[s[i - 1]], y = roman[s[i]];
        ans += x < y ? -x : x;
        i++;
    }
    return ans + roman[s[i - 1]];
}
