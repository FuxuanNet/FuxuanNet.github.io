---
title: 基于 KNN 算法实现手写英文大小写字母的识别
tags:
  - 教程
categories:
  - 随便说说
date: 2024-10-10
description: 气体动理论
articleGPT: 福轩说什么，你就听什么
---

## 一、编程语言及运行环境

- 编程语言：C 语言

- 开发工具：Visual Studio Code 

- 软件环境：`gcc`

- 硬件环境：
	
	- **CPU**：
	
	- **内存**：
	
	- **操作系统**：

---

## 二、数据结构

### 主要数据结构

1. **图像矩阵**：二维数组 `int matrix[32][32]`，存储 32×32 的二值化图像。

2. **图像向量**：一维数组 `double vector[VECTOR_SIZE]`，用来存储矩阵展平后的 1024 维特征向量。

3. **标签数组**：二维字符数组 `char labels[LABEL_SIZE][55]`，存储每个样本的标签，共支持大小写字母和数字标签。

4. **距离数组**：一维数组 `double distances[LABEL_SIZE * 55]`，存储测试样本与训练样本之间的欧几里得距离。

---

## 三、设计思想

### 总体设计

采用 KNN（K-Nearest Neighbors）算法，识别手写英文大小写字母。核心思想是通过计算测试样本与训练样本的距离，根据最近的 K 个邻居判断所属类别。

### 具体流程


1. **加载背景图像**：为程序窗口绘制背景，增强用户体验。

2. **数据加载**：从本地读取训练样本的 32×32 二值化矩阵，转换为 1024 维向量存储。

3. **距离计算**：基于欧几里得公式，计算测试样本与训练样本的距离，存储到 `distances` 数组中。

4. **排序与选择**：对距离数组进行升序排序，选取距离最小的 K 个样本的标签。

5. **结果投票**：统计 K 个标签中出现次数最多的类别作为最终结果。

6. **显示结果**：通过窗口显示最终预测结果。

---

## 四、成员分工

### 总体分工

所有成员的代码行数与工作量大致均衡。各自负责一个功能模块，同时共同协作完成程序的集成与测试。

| 学号         | 姓名  | 模块任务分工     | 模块功能详细概述 |
|: ---------- :| :---: |: ----------: | -------------------------- |
| 2024092120 | 董安琪 | 数据加载与预处理模块 | 负责矩阵加载、图像向量化及标签创建。         |
| 2024092119 | 孔雅茵 | 距离计算与排序模块  | 负责计算欧几里得距离，完成排序与最近邻提取。     |
| 2024092102 | 王紫晴 | 图形界面与结果显示  | 负责界面设计、文件选择功能、结果显示与最终集成测试。 |

### 详细任务分工

#### 成员 1 的工作

- **学号**：2024092120
- **姓名**：董安琪
- **任务分工**：数据加载与预处理模块

  - 加载训练集矩阵（`read_matrix` 函数）
  - 图像矩阵向量化（`matrix_to_vector` 函数）
  - 标签创建（`create_labels` 函数）
- **设计思想**：

  1. 从本地训练数据文件中逐行读取 32×32 的二值化矩阵。
  2. 使用 `matrix_to_vector` 函数，将矩阵展平为 1024 维向量，供后续算法使用。
  3. 创建 `labels` 数组，预定义大小写字母及数字标签。
  4. 确保预处理后的数据能够正确传递至后续模块。
- 代码行数：
- 实验代码及注释：

```c
// 从文件中读取32x32的矩阵表示图像

void read_matrix(const char *file_name, int matrix[32][32])

{

    printf("read_matrix 函数 Opening file: %s\n", file_name); // 打印文件路径用于调试

  

    FILE *file = fopen(file_name, "r");

    if (file == NULL)

    {

        // 打开文件失败，终止程序

        perror("Error opening file");

        exit(1);

    }

  

    char line[33]; // 读取每行32个字符 + 1个空字符

    int row = 0;

  

    // 按行读取文件内容

    while (fgets(line, sizeof(line), file) != NULL && row < 32)

    {

        for (int col = 0; col < 32; col++)

        {

            if (line[col] == '0')

            {

                matrix[row][col] = 0;

            }

            else if (line[col] == '1')

            {

                matrix[row][col] = 1;

            }

            else

            {

                matrix[row][col] = 0; // 默认值，如果遇到非0/1字符

            }

        }

        row++;

    }

  

    fclose(file);

}

// 将32x32的图像矩阵转换为1024维的向量

void matrix_to_vector(int matrix[32][32], double vector[VECTOR_SIZE])

{

    int idx = 0;

    for (int i = 0; i < 32; i++)

    {

        for (int j = 0; j < 32; j++)

        {

            vector[idx++] = (double)matrix[i][j]; // 将矩阵值转为向量

        }

    }

  

    // for (int i = 0; i < 32; i++)

    // {

    //     for (int j = 0; j < 32; j++)

    //     {

    //         printf("矩阵%d ", matrix[i][j]);

    //     }

    //     printf("\n");

    // }

}

  

// 计算两个向量之间的欧几里得距离

double calculate_distance(double vector1[VECTOR_SIZE], double vector2[VECTOR_SIZE])

{

  

    double distance = 0.0;

    for (int i = 0; i < VECTOR_SIZE; i++)

    {

        // 计算每个维度的差异并求和

  

        // double diff = vector1[i] - vector2[i];

        // printf("Difference at index %d: %.2f\n", i, diff); // 打印差值

        distance += pow(vector1[i] - vector2[i], 2);

    }

  

    return sqrt(distance);

}

// 创建标签，用于KNN分类

void create_labels(char labels[LABEL_SIZE][55])

{

    int idx = 0;

  

    // 创建数字标签 (0-9)

    for (int i = 0; i < 10; i++)

    {

        for (int j = 0; j < 55; j++)

        {

            // 填充数字标签

            labels[idx][j] = '0' + i;

        }

        idx++;

    }

  

    // 如果需要支持字母A-Z和a-z，可以取消注释以下代码

    // for (char ch = 'A'; ch <= 'Z'; ch++)

    // {

    //     for (int j = 0; j < 55; j++)

    //     {

    //         labels[idx][j] = ch;

    //     }

    //     idx++;

    // }

    // for (char ch = 'a'; ch <= 'z'; ch++)

    // {

    //     for (int j = 0; j < 55; j++)

    //     {

    //         labels[idx][j] = ch;

    //     }

    //     idx++;

    // }

}
```

#### 成员 2 的工作

- **学号**：2024092119
- **姓名**：孔雅茵
- **任务分工**：距离计算与排序模块

  - 计算欧几里得距离（`calculate_distance` 函数）
  - 提取测试样本与训练集的距离（`get_distances` 函数）
  - 排序并提取最近邻（`get_top_k_labels` 和 `compare` 函数）
  - 获取 K 个标签中最常见的标签（`most_common_label` 函数）
- **设计思想**：

  1. 使用欧几里得距离公式，计算测试样本与训练样本的差异：\[
     \text{distance} = \sqrt{\sum_{i=1}^{1024}(v1[i] - v2[i])^2}
     \]
  2. 将所有距离存储到 `distances` 数组中，并调用 `qsort` 函数升序排序。
  3. 提取距离最小的 K 个样本的标签，并存储到 `result` 数组。
  4. 确保模块对所有样本的距离计算高效、准确。
- 代码行数：
- 实验代码及注释：

```c
// 计算欧几里得距离
// 计算两个向量之间的欧几里得距离

double calculate_distance(double vector1[VECTOR_SIZE], double vector2[VECTOR_SIZE])

{

  

    double distance = 0.0;

    for (int i = 0; i < VECTOR_SIZE; i++)

    {

        // 计算每个维度的差异并求和

  

        // double diff = vector1[i] - vector2[i];

        // printf("Difference at index %d: %.2f\n", i, diff); // 打印差值

        distance += pow(vector1[i] - vector2[i], 2);

    }

  

    return sqrt(distance);

}

// 获取测试样本到训练样本的距离
void get_distances(double distances[], double vector1[VECTOR_SIZE]) { ... }

// 获取训练样本与测试样本之间的距离

void get_distances(double distances[], double vector1[VECTOR_SIZE])

{

    char working_directory[MAX_PATH];

    if (GetCurrentDirectory(MAX_PATH, working_directory) == 0)

    {

        printf("get_distances 函数 Failed to get current directory\n");

        exit(1);

    }

  

    // 退回到上一级目录

    PathRemoveFileSpec(working_directory); // 去掉最后的文件夹部分，回到上一级目录

  

    // 遍历所有训练集文件

    for (int i = 1; i <= LABEL_SIZE; i++)

    {

        for (int j = 1; j <= 55; j++)

        {

            char file_name[256];

            snprintf(file_name, sizeof(file_name), "%s\\bin\\Sample%03d\\img%03d-%03d.txt", working_directory, i, i, j); // 完整路径

  

            printf("get_distances 函数 Opening file: %s\n", file_name); // 打印完整路径调试

  

            int matrix[32][32];

            read_matrix(file_name, matrix); // 读取训练集文件

  

            double vector2[VECTOR_SIZE];

            matrix_to_vector(matrix, vector2);

  

            distances[(i - 1) * 55 + (j - 1)] = calculate_distance(vector1, vector2);

        }

    }

}


// 用于排序的比较函数，按距离升序排序

int compare(const void *a, const void *b)

{

    return (*(double *)a - *(double *)b);

}

// 获取 K 个标签中的最常见标签

char most_common_label(char top_K_labels[K])

{

    // 定义一个数组用于统计每个字符的出现次数

    int count[256] = {0};

  

    // 遍历所有的 K 个标签，统计每个标签的出现次数

    for (int i = 0; i < K; i++)

    {

        count[(int)top_K_labels[i]]++;

    }

  

    int max_count = 0;

    char most_common = top_K_labels[0];

  

    // 遍历 K 个标签，查找出现次数最多的标签

    for (int i = 0; i < K; i++)

    {

        // 如果当前标签的计数比当前最大次数还多，则更新最常见标签及其次数

        if (count[(int)top_K_labels[i]] > max_count)

        {

            max_count = count[(int)top_K_labels[i]];

            most_common = top_K_labels[i];

        }

    }

  

    // 返回出现次数最多的标签

    return most_common;

}
```

#### 成员 3 的工作

- **学号**：2024092102
- **姓名**：王紫晴
- **任务分工**：图形界面与结果显示模块
  - 图形界面的初始化与布局（窗口过程函数 WindowProc）
  - 文件选择功能（OpenFileDialog 函数）
  - 结果显示与集成（调用其他模块完成预测并显示结果）
  - 背景图像加载与绘制（LoadBackgroundImage 和 DrawBackgroundImage 函数）
- **设计思想**：
  1. 创建程序窗口，设计用户界面。实现背景加载与按钮点击功能。
  2. 编写文件选择对话框，支持用户选择测试文件进行分类。
  3. 集成各模块，调用核心算法进行预测，并将结果显示在文本框中。
  4. 负责程序整体测试与调试，确保用户体验流畅。
- 代码行数：
- 实验代码及注释：

```c
// 加载背景图像

void LoadBackgroundImage(HWND hwnd)

{

    // 尝试加载图像文件

    hBackgroundBitmap = (HBITMAP)LoadImage(NULL, "./background.bmp", IMAGE_BITMAP, 0, 0, LR_LOADFROMFILE | LR_CREATEDIBSECTION);

    if (hBackgroundBitmap == NULL)

    {

        DWORD dwError = GetLastError();

        char errorMsg[256];

  

        // snprintf(errorMsg, sizeof(errorMsg), "Failed to load background image! Error code: %lu", dwError);

        // MessageBox(hwnd, errorMsg, "Error", MB_OK | MB_ICONERROR);

    }

}

// 绘制背景图像

void DrawBackgroundImage(HWND hwnd, HDC hdc)

{

    if (hBackgroundBitmap != NULL)

    {

        // 创建兼容的内存DC

        HDC hMemDC = CreateCompatibleDC(hdc);

        HBITMAP hOldBitmap = (HBITMAP)SelectObject(hMemDC, hBackgroundBitmap);

  

        // 获取图像的信息

        BITMAP bm;

        GetObject(hBackgroundBitmap, sizeof(bm), &bm);

  

        // 获取窗口客户区的大小

        RECT rect;

        GetClientRect(hwnd, &rect);

  

        // 将背景图像绘制到窗口客户区

        StretchBlt(hdc, 0, 0, rect.right, rect.bottom, hMemDC, 0, 0, bm.bmWidth, bm.bmHeight, SRCCOPY);

  

        // 清理

        SelectObject(hMemDC, hOldBitmap);

        DeleteDC(hMemDC);

    }

}


// 文件选择对话框

void OpenFileDialog(HWND hwnd)

{

    // 定义一个 OPENFILENAME 结构体，它用于存储文件选择对话框的各种信息

    OPENFILENAME ofn;

    char szFile[260]; // 用来存储用户选择的文件路径

  

    // 清空 ofn 结构体中的所有数据，确保不会有垃圾数据

    ZeroMemory(&ofn, sizeof(ofn));

  

    // 设置 OPENFILENAME 结构体的各个字段

    ofn.lStructSize = sizeof(ofn);                           // 结构体大小，Windows API 需要这个值来识别结构体类型

    ofn.hwndOwner = hwnd;                                    // 窗口句柄，父窗口句柄（用于显示文件对话框）

    ofn.lpstrFile = szFile;                                  // 用来接收选中文件路径的缓冲区

    ofn.nMaxFile = sizeof(szFile);                           // 文件路径缓冲区的最大大小

    ofn.lpstrFilter = "Text Files\0*.TXT\0All Files\0*.*\0"; // 文件类型过滤器（这里只支持 TXT 文件）

    ofn.nFilterIndex = 1;                                    // 默认的过滤器索引（这里是 TXT 文件）

    ofn.lpstrFile[0] = '\0';                                 // 初始路径为空字符串

    ofn.nMaxFile = sizeof(szFile);                           // 确保文件路径不会超过缓冲区大小

    ofn.lpstrFileTitle = NULL;                               // 不使用文件名

    ofn.nMaxFileTitle = 0;                                   // 文件名最大长度

    ofn.lpstrInitialDir = NULL;                              // 初始目录为空

    ofn.Flags = OFN_PATHMUSTEXIST | OFN_FILEMUSTEXIST;       // 文件路径必须存在

  

    // 显示文件选择对话框

    if (GetOpenFileName(&ofn) == TRUE)

    {

        // 显示“正在处理...”提示

        SetWindowText(hResultTextBox, "Processing...");

  

        // 调用主要预测代码

        printf("OpenFileDialog 函数 Selected file: %s\n", szFile);

  

        // 读取文件内容并填充矩阵

        int test_matrix[32][32];

        read_matrix(szFile, test_matrix); // 这里传递的是用户选择的绝对路径

  

        // 将 32x32 的矩阵转换为一个向量

        double vector1[VECTOR_SIZE];

        matrix_to_vector(test_matrix, vector1);

  

        // 计算所有标签的样本与当前测试样本之间的距离

        double distances[LABEL_SIZE * 55];

        get_distances(distances, vector1);

  

        char result[K];

        char labels[LABEL_SIZE][55];

        create_labels(labels);

        get_top_k_labels(distances, labels, result);

  

        // 计算最常见的标签（即 K 个标签中出现次数最多的标签）

        char final_result = most_common_label(result);

        char result_str[100];

        sprintf(result_str, "Prediction: %c", final_result);

  

        // 显示预测结果

        SetWindowText(hResultTextBox, result_str);

    }

}

// 窗口过程函数

LRESULT CALLBACK WindowProc(HWND hwnd, UINT uMsg, WPARAM wParam, LPARAM lParam)

{

  

    switch (uMsg)

    {

    case WM_COMMAND:

    {

        // 点击文件选择按钮时

        if (LOWORD(wParam) == 1)

        {

            // 调用文件选择对话框函数，允许用户选择文件

            OpenFileDialog(hwnd);

        }

        break;

    }

    case WM_CREATE:

    {

        // 创建选择文件按钮和结果文本框

        CreateWindow(

            "BUTTON",                                              // 控件类型：按钮

            "Select File",                                         // 按钮文本

            WS_TABSTOP | WS_VISIBLE | WS_CHILD | BS_DEFPUSHBUTTON, // 按钮样式：可见、子窗口、默认按钮

            50, 50,                                                // 按钮位置：x=50, y=50

            200, 40,                                               // 按钮大小：宽200, 高40

            hwnd,                                                  // 父窗口句柄

            (HMENU)1,                                              // 按钮的ID（用来标识按钮）

            (HINSTANCE)GetWindowLongPtr(hwnd, GWLP_HINSTANCE),     // 窗口实例句柄

            NULL                                                   // 附加数据

        );

  

        // 创建一个文本框控件，用于显示预测结果

        hResultTextBox = CreateWindow(

            "EDIT",                                                         // 控件类型：编辑框（文本框）

            "",                                                             // 初始文本为空

            WS_CHILD | WS_VISIBLE | WS_BORDER | ES_MULTILINE | ES_READONLY, // 样式：子窗口、可见、带边框、支持多行、只读

            50, 100,                                                        // 文本框位置：x=50, y=100

            400, 200,                                                       // 文本框大小：宽400, 高200

            hwnd,                                                           // 父窗口句柄

            NULL,                                                           // 控件ID

            (HINSTANCE)GetWindowLongPtr(hwnd, GWLP_HINSTANCE),              // 窗口实例句柄

            NULL                                                            // 附加数据

        );

  

        // 加载背景图像

        LoadBackgroundImage(hwnd); // 加载背景图像

        break;

    }

    case WM_PAINT:

    {

        PAINTSTRUCT ps;

        HDC hdc = BeginPaint(hwnd, &ps);

  

        // 绘制背景图像

        DrawBackgroundImage(hwnd, hdc);

  

        EndPaint(hwnd, &ps);

        break;

    }

    case WM_DESTROY:

        // 当窗口被销毁时，退出应用程序

        PostQuitMessage(0);

        break;

    default:

        // 对于没有处理的消息，调用默认窗口过程函数

        return DefWindowProc(hwnd, uMsg, wParam, lParam);

    }

  

    return 0;

}
```

---
