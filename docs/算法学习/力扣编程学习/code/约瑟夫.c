#include <stdio.h>
#include <stdlib.h>

typedef struct LNode
{
    int data;
    struct LNode *next;
} LNode, *LinkList;

void CreateLinkList(int n, LinkList *L)
{
    *L = (LinkList)malloc(sizeof(LNode)); // 头指针
    LinkList tail = *L; // 尾指针
    (*L)->next = NULL; // 头节点
    for (int i = 0; i < n; i++)
    {
        LinkList p = (LinkList)malloc(sizeof(LNode)); // 建一个节点
        p->data = i + 1; // 放入数据
        tail->next = p; // 
        tail = p;
    }
    tail->next = (*L)->next;
    
}

// int main(void)
// {
//     // 定义两个整数变量n和k
//     int n, k;
//     // 从标准输入读取n和k的值
//     scanf("%d %d", &n, &k);
//     // 定义一个链表L
//     LinkList L;
//     // 创建一个长度为n的循环链表L
//     CreateLinkList(n, &L);
//     // 定义一个指针p，指向链表L的第一个节点
//     LinkList p = L->next;
//     // 定义一个整数变量num，用于记录当前节点是第几个节点
//     int num = 0;
//     // 遍历链表L
//     while (p)
//     {
//         // 将num加1
//         num++;
//         // 如果num等于k
//         if (num  == p->data)
//         {
//             // 将num重置为0
//             num = 0;

//             n--;
//             // 如果当前节点的下一个节点是当前节点本身
//             if (n == 1)
//             {
//                 // 输出当前节点的值
//                 printf("%d", p->data);
//                 // 返回 0，结束程序
//                 return 0;
//             }
//             // 定义一个指针 q，指向当前节点的下一个节点
//             LinkList q = p->next;
//             // 将当前节点的下一个节点指向下一个节点的下一个节点
//             p->next = q->next;
//             // 释放当前节点
//             free(q);
//         }
//         // 将 p 指向下一个节点
//         p = p->next;
//     }
// }

int main(void)
{
    int n, k;
    scanf("%d %d", &n, &k);
    LinkList L;
    CreateLinkList(n, &L);

    LinkList p = L->next; // p 指向第一个节点
    LinkList temp;

    while (n > 1)
    { // 直到剩下最后一个人
        // 移动 p 指针到第 k-1 个节点
        for (int i = 1; i < k - 1; i++)
        {
            p = p->next;
        }

        // 删除 p->next 节点，即第 k 个节点
        temp = p->next;
        printf("%d ", temp->data); // 输出被删除的人的编号
        p->next = temp->next;      // 跳过被删除的节点
        free(temp);                // 释放内存
        n--;                       // 剩余人数减 1
    }

    // 输出最后一个人的编号
    printf("%d\n", p->data);
    return 0;
}