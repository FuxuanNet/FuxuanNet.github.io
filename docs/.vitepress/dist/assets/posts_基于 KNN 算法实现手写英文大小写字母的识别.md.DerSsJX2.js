import{_ as i,c as a,aN as n,o as l}from"./chunks/framework.C12FJ_o-.js";const g=JSON.parse('{"title":"基于 KNN 算法实现手写英文大小写字母的识别","description":"气体动理论","frontmatter":{"title":"基于 KNN 算法实现手写英文大小写字母的识别","tags":["教程"],"categories":["随便说说"],"date":"2024-10-10T00:00:00.000Z","description":"气体动理论","articleGPT":"福轩说什么，你就听什么"},"headers":[],"relativePath":"posts/基于 KNN 算法实现手写英文大小写字母的识别.md","filePath":"posts/基于 KNN 算法实现手写英文大小写字母的识别.md"}'),p={name:"posts/基于 KNN 算法实现手写英文大小写字母的识别.md"};function h(k,s,t,e,E,r){return l(),a("div",null,s[0]||(s[0]=[n(`<h2 id="一、编程语言及运行环境" tabindex="-1">一、编程语言及运行环境 <a class="header-anchor" href="#一、编程语言及运行环境" aria-label="Permalink to &quot;一、编程语言及运行环境&quot;">​</a></h2><ul><li><p>编程语言：C 语言</p></li><li><p>开发工具：Visual Studio Code</p></li><li><p>软件环境：<code>gcc</code></p></li><li><p>硬件环境：</p><ul><li><p><strong>CPU</strong>：</p></li><li><p><strong>内存</strong>：</p></li><li><p><strong>操作系统</strong>：</p></li></ul></li></ul><hr><h2 id="二、数据结构" tabindex="-1">二、数据结构 <a class="header-anchor" href="#二、数据结构" aria-label="Permalink to &quot;二、数据结构&quot;">​</a></h2><h3 id="主要数据结构" tabindex="-1">主要数据结构 <a class="header-anchor" href="#主要数据结构" aria-label="Permalink to &quot;主要数据结构&quot;">​</a></h3><ol><li><p><strong>图像矩阵</strong>：二维数组 <code>int matrix[32][32]</code>，存储 32×32 的二值化图像。</p></li><li><p><strong>图像向量</strong>：一维数组 <code>double vector[VECTOR_SIZE]</code>，用来存储矩阵展平后的 1024 维特征向量。</p></li><li><p><strong>标签数组</strong>：二维字符数组 <code>char labels[LABEL_SIZE][55]</code>，存储每个样本的标签，共支持大小写字母和数字标签。</p></li><li><p><strong>距离数组</strong>：一维数组 <code>double distances[LABEL_SIZE * 55]</code>，存储测试样本与训练样本之间的欧几里得距离。</p></li></ol><hr><h2 id="三、设计思想" tabindex="-1">三、设计思想 <a class="header-anchor" href="#三、设计思想" aria-label="Permalink to &quot;三、设计思想&quot;">​</a></h2><h3 id="总体设计" tabindex="-1">总体设计 <a class="header-anchor" href="#总体设计" aria-label="Permalink to &quot;总体设计&quot;">​</a></h3><p>采用 KNN（K-Nearest Neighbors）算法，识别手写英文大小写字母。核心思想是通过计算测试样本与训练样本的距离，根据最近的 K 个邻居判断所属类别。</p><h3 id="具体流程" tabindex="-1">具体流程 <a class="header-anchor" href="#具体流程" aria-label="Permalink to &quot;具体流程&quot;">​</a></h3><ol><li><p><strong>加载背景图像</strong>：为程序窗口绘制背景，增强用户体验。</p></li><li><p><strong>数据加载</strong>：从本地读取训练样本的 32×32 二值化矩阵，转换为 1024 维向量存储。</p></li><li><p><strong>距离计算</strong>：基于欧几里得公式，计算测试样本与训练样本的距离，存储到 <code>distances</code> 数组中。</p></li><li><p><strong>排序与选择</strong>：对距离数组进行升序排序，选取距离最小的 K 个样本的标签。</p></li><li><p><strong>结果投票</strong>：统计 K 个标签中出现次数最多的类别作为最终结果。</p></li><li><p><strong>显示结果</strong>：通过窗口显示最终预测结果。</p></li></ol><hr><h2 id="四、成员分工" tabindex="-1">四、成员分工 <a class="header-anchor" href="#四、成员分工" aria-label="Permalink to &quot;四、成员分工&quot;">​</a></h2><h3 id="总体分工" tabindex="-1">总体分工 <a class="header-anchor" href="#总体分工" aria-label="Permalink to &quot;总体分工&quot;">​</a></h3><p>所有成员的代码行数与工作量大致均衡。各自负责一个功能模块，同时共同协作完成程序的集成与测试。</p><p>| 学号 | 姓名 | 模块任务分工 | 模块功能详细概述 | |: ---------- 😐 :---: |: ----------: | -------------------------- | | 2024092120 | 董安琪 | 数据加载与预处理模块 | 负责矩阵加载、图像向量化及标签创建。 | | 2024092119 | 孔雅茵 | 距离计算与排序模块 | 负责计算欧几里得距离，完成排序与最近邻提取。 | | 2024092102 | 王紫晴 | 图形界面与结果显示 | 负责界面设计、文件选择功能、结果显示与最终集成测试。 |</p><h3 id="详细任务分工" tabindex="-1">详细任务分工 <a class="header-anchor" href="#详细任务分工" aria-label="Permalink to &quot;详细任务分工&quot;">​</a></h3><h4 id="成员-1-的工作" tabindex="-1">成员 1 的工作 <a class="header-anchor" href="#成员-1-的工作" aria-label="Permalink to &quot;成员 1 的工作&quot;">​</a></h4><ul><li><p><strong>学号</strong>：2024092120</p></li><li><p><strong>姓名</strong>：董安琪</p></li><li><p><strong>任务分工</strong>：数据加载与预处理模块</p><ul><li>加载训练集矩阵（<code>read_matrix</code> 函数）</li><li>图像矩阵向量化（<code>matrix_to_vector</code> 函数）</li><li>标签创建（<code>create_labels</code> 函数）</li></ul></li><li><p><strong>设计思想</strong>：</p><ol><li>从本地训练数据文件中逐行读取 32×32 的二值化矩阵。</li><li>使用 <code>matrix_to_vector</code> 函数，将矩阵展平为 1024 维向量，供后续算法使用。</li><li>创建 <code>labels</code> 数组，预定义大小写字母及数字标签。</li><li>确保预处理后的数据能够正确传递至后续模块。</li></ol></li><li><p>代码行数：</p></li><li><p>实验代码及注释：</p></li></ul><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 从文件中读取32x32的矩阵表示图像</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> read_matrix</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> char</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">file_name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> matrix</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">32</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">][</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">32</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;read_matrix 函数 Opening file: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%s\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, file_name);</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 打印文件路径用于调试</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    FILE </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">file </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> fopen</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(file_name, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;r&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (file </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> NULL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 打开文件失败，终止程序</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        perror</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Error opening file&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        exit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    char</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> line</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">33</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 读取每行32个字符 + 1个空字符</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> row </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 按行读取文件内容</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    while</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">fgets</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(line, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">sizeof</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(line), file) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> NULL</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &amp;&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> row </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 32</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> col </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; col </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 32</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; col</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">line</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[col] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;0&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">                matrix</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[row][col] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            else</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">line</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[col] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;1&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">                matrix</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[row][col] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            else</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">                matrix</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[row][col] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 默认值，如果遇到非0/1字符</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        row</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    fclose</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(file);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 将32x32的图像矩阵转换为1024维的向量</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> matrix_to_vector</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> matrix</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">32</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">][</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">32</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">double</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> vector</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[VECTOR_SIZE])</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> idx </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 32</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> j </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; j </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 32</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; j</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">            vector</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[idx</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">double</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">matrix</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[i][j];</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 将矩阵值转为向量</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // for (int i = 0; i &lt; 32; i++)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //     for (int j = 0; j &lt; 32; j++)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //     {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //         printf(&quot;矩阵%d &quot;, matrix[i][j]);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //     }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //     printf(&quot;\\n&quot;);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 计算两个向量之间的欧几里得距离</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">double</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> calculate_distance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">double</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> vector1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[VECTOR_SIZE], </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">double</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> vector2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[VECTOR_SIZE])</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    double</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> distance </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> VECTOR_SIZE; i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 计算每个维度的差异并求和</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // double diff = vector1[i] - vector2[i];</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // printf(&quot;Difference at index %d: %.2f\\n&quot;, i, diff); // 打印差值</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        distance </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> pow</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">vector1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[i] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> vector2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[i], </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> sqrt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(distance);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 创建标签，用于KNN分类</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> create_labels</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">char</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> labels</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[LABEL_SIZE][</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">55</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> idx </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 创建数字标签 (0-9)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> j </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; j </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 55</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; j</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            // 填充数字标签</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">            labels</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[idx][j] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;0&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        idx</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 如果需要支持字母A-Z和a-z，可以取消注释以下代码</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // for (char ch = &#39;A&#39;; ch &lt;= &#39;Z&#39;; ch++)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //     for (int j = 0; j &lt; 55; j++)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //     {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //         labels[idx][j] = ch;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //     }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //     idx++;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // for (char ch = &#39;a&#39;; ch &lt;= &#39;z&#39;; ch++)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //     for (int j = 0; j &lt; 55; j++)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //     {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //         labels[idx][j] = ch;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //     }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //     idx++;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h4 id="成员-2-的工作" tabindex="-1">成员 2 的工作 <a class="header-anchor" href="#成员-2-的工作" aria-label="Permalink to &quot;成员 2 的工作&quot;">​</a></h4><ul><li><p><strong>学号</strong>：2024092119</p></li><li><p><strong>姓名</strong>：孔雅茵</p></li><li><p><strong>任务分工</strong>：距离计算与排序模块</p><ul><li>计算欧几里得距离（<code>calculate_distance</code> 函数）</li><li>提取测试样本与训练集的距离（<code>get_distances</code> 函数）</li><li>排序并提取最近邻（<code>get_top_k_labels</code> 和 <code>compare</code> 函数）</li><li>获取 K 个标签中最常见的标签（<code>most_common_label</code> 函数）</li></ul></li><li><p><strong>设计思想</strong>：</p><ol><li>使用欧几里得距离公式，计算测试样本与训练样本的差异：[ \\text{distance} = \\sqrt{\\sum_{i=1}^{1024}(v1[i] - v2[i])^2} ]</li><li>将所有距离存储到 <code>distances</code> 数组中，并调用 <code>qsort</code> 函数升序排序。</li><li>提取距离最小的 K 个样本的标签，并存储到 <code>result</code> 数组。</li><li>确保模块对所有样本的距离计算高效、准确。</li></ol></li><li><p>代码行数：</p></li><li><p>实验代码及注释：</p></li></ul><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 计算欧几里得距离</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 计算两个向量之间的欧几里得距离</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">double</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> calculate_distance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">double</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> vector1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[VECTOR_SIZE], </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">double</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> vector2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[VECTOR_SIZE])</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    double</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> distance </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> VECTOR_SIZE; i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 计算每个维度的差异并求和</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // double diff = vector1[i] - vector2[i];</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // printf(&quot;Difference at index %d: %.2f\\n&quot;, i, diff); // 打印差值</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        distance </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> pow</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">vector1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[i] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> vector2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[i], </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> sqrt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(distance);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 获取测试样本到训练样本的距离</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> get_distances</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">double</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> distances</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">[]</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">double</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> vector1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[VECTOR_SIZE]) { ... }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 获取训练样本与测试样本之间的距离</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> get_distances</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">double</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> distances</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">[]</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">double</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> vector1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[VECTOR_SIZE])</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    char</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> working_directory</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[MAX_PATH];</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">GetCurrentDirectory</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(MAX_PATH, working_directory) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;get_distances 函数 Failed to get current directory</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        exit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 退回到上一级目录</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    PathRemoveFileSpec</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(working_directory);</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 去掉最后的文件夹部分，回到上一级目录</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 遍历所有训练集文件</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> LABEL_SIZE; i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> j </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; j </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 55</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; j</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            char</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> file_name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">256</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">            snprintf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(file_name, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">sizeof</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(file_name), </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%s\\\\</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">bin</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\\\</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Sample</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%03d\\\\</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">img</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%03d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%03d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.txt&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, working_directory, i, i, j);</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 完整路径</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">            printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;get_distances 函数 Opening file: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%s\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, file_name);</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 打印完整路径调试</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            int</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> matrix</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">32</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">][</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">32</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">            read_matrix</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(file_name, matrix);</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 读取训练集文件</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            double</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> vector2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[VECTOR_SIZE];</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">            matrix_to_vector</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(matrix, vector2);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">            distances</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[(i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 55</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (j </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> calculate_distance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(vector1, vector2);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 用于排序的比较函数，按距离升序排序</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> compare</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">b</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">double</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">double</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)b);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 获取 K 个标签中的最常见标签</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">char</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> most_common_label</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">char</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> top_K_labels</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[K])</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 定义一个数组用于统计每个字符的出现次数</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    int</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> count</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">256</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 遍历所有的 K 个标签，统计每个标签的出现次数</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> K; i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">        count</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">top_K_labels</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[i]]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> max_count </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    char</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> most_common </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> top_K_labels</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 遍历 K 个标签，查找出现次数最多的标签</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> K; i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 如果当前标签的计数比当前最大次数还多，则更新最常见标签及其次数</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">count</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">top_K_labels</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[i]] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> max_count)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            max_count </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> count</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">top_K_labels</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[i]];</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            most_common </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> top_K_labels</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[i];</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 返回出现次数最多的标签</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> most_common;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h4 id="成员-3-的工作" tabindex="-1">成员 3 的工作 <a class="header-anchor" href="#成员-3-的工作" aria-label="Permalink to &quot;成员 3 的工作&quot;">​</a></h4><ul><li><strong>学号</strong>：2024092102</li><li><strong>姓名</strong>：王紫晴</li><li><strong>任务分工</strong>：图形界面与结果显示模块 <ul><li>图形界面的初始化与布局（窗口过程函数 WindowProc）</li><li>文件选择功能（OpenFileDialog 函数）</li><li>结果显示与集成（调用其他模块完成预测并显示结果）</li><li>背景图像加载与绘制（LoadBackgroundImage 和 DrawBackgroundImage 函数）</li></ul></li><li><strong>设计思想</strong>： <ol><li>创建程序窗口，设计用户界面。实现背景加载与按钮点击功能。</li><li>编写文件选择对话框，支持用户选择测试文件进行分类。</li><li>集成各模块，调用核心算法进行预测，并将结果显示在文本框中。</li><li>负责程序整体测试与调试，确保用户体验流畅。</li></ol></li><li>代码行数：</li><li>实验代码及注释：</li></ul><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 加载背景图像</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> LoadBackgroundImage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(HWND </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">hwnd</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 尝试加载图像文件</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    hBackgroundBitmap </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (HBITMAP)</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">LoadImage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">NULL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;./background.bmp&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, IMAGE_BITMAP, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, LR_LOADFROMFILE </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> LR_CREATEDIBSECTION);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (hBackgroundBitmap </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> NULL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        DWORD dwError </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> GetLastError</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        char</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> errorMsg</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">256</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // snprintf(errorMsg, sizeof(errorMsg), &quot;Failed to load background image! Error code: %lu&quot;, dwError);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // MessageBox(hwnd, errorMsg, &quot;Error&quot;, MB_OK | MB_ICONERROR);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 绘制背景图像</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> DrawBackgroundImage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(HWND </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">hwnd</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, HDC </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">hdc</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (hBackgroundBitmap </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> NULL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 创建兼容的内存DC</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        HDC hMemDC </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CreateCompatibleDC</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(hdc);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        HBITMAP hOldBitmap </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (HBITMAP)</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">SelectObject</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(hMemDC, hBackgroundBitmap);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 获取图像的信息</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        BITMAP bm;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        GetObject</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(hBackgroundBitmap, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">sizeof</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(bm), </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">bm);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 获取窗口客户区的大小</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        RECT rect;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        GetClientRect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(hwnd, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">rect);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 将背景图像绘制到窗口客户区</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        StretchBlt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(hdc, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, rect.right, rect.bottom, hMemDC, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, bm.bmWidth, bm.bmHeight, SRCCOPY);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 清理</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        SelectObject</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(hMemDC, hOldBitmap);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        DeleteDC</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(hMemDC);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 文件选择对话框</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> OpenFileDialog</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(HWND </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">hwnd</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 定义一个 OPENFILENAME 结构体，它用于存储文件选择对话框的各种信息</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    OPENFILENAME ofn;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    char</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> szFile</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">260</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 用来存储用户选择的文件路径</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 清空 ofn 结构体中的所有数据，确保不会有垃圾数据</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    ZeroMemory</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ofn, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">sizeof</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ofn));</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 设置 OPENFILENAME 结构体的各个字段</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ofn.lStructSize </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> sizeof</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ofn);</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                           // 结构体大小，Windows API 需要这个值来识别结构体类型</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ofn.hwndOwner </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> hwnd;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                                    // 窗口句柄，父窗口句柄（用于显示文件对话框）</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ofn.lpstrFile </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> szFile;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                                  // 用来接收选中文件路径的缓冲区</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ofn.nMaxFile </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> sizeof</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(szFile);</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                           // 文件路径缓冲区的最大大小</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ofn.lpstrFilter </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Text Files</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">*.TXT</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">All Files</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">*.*</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 文件类型过滤器（这里只支持 TXT 文件）</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ofn.nFilterIndex </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                                    // 默认的过滤器索引（这里是 TXT 文件）</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ofn.lpstrFile[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                                 // 初始路径为空字符串</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ofn.nMaxFile </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> sizeof</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(szFile);</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                           // 确保文件路径不会超过缓冲区大小</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ofn.lpstrFileTitle </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> NULL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                               // 不使用文件名</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ofn.nMaxFileTitle </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                                   // 文件名最大长度</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ofn.lpstrInitialDir </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> NULL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                              // 初始目录为空</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ofn.Flags </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> OFN_PATHMUSTEXIST </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> OFN_FILEMUSTEXIST;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">       // 文件路径必须存在</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 显示文件选择对话框</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">GetOpenFileName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ofn) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> TRUE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 显示“正在处理...”提示</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        SetWindowText</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(hResultTextBox, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Processing...&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 调用主要预测代码</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;OpenFileDialog 函数 Selected file: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%s\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, szFile);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 读取文件内容并填充矩阵</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        int</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> test_matrix</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">32</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">][</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">32</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        read_matrix</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(szFile, test_matrix);</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 这里传递的是用户选择的绝对路径</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 将 32x32 的矩阵转换为一个向量</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        double</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> vector1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[VECTOR_SIZE];</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        matrix_to_vector</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(test_matrix, vector1);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 计算所有标签的样本与当前测试样本之间的距离</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        double</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> distances</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[LABEL_SIZE </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 55</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        get_distances</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(distances, vector1);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        char</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> result</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[K];</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        char</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> labels</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[LABEL_SIZE][</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">55</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        create_labels</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(labels);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        get_top_k_labels</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(distances, labels, result);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 计算最常见的标签（即 K 个标签中出现次数最多的标签）</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        char</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> final_result </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> most_common_label</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(result);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        char</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> result_str</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        sprintf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(result_str, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Prediction: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%c</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, final_result);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 显示预测结果</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        SetWindowText</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(hResultTextBox, result_str);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 窗口过程函数</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">LRESULT CALLBACK </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">WindowProc</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(HWND </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">hwnd</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, UINT </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">uMsg</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, WPARAM </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">wParam</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, LPARAM </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">lParam</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    switch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (uMsg)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    case</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> WM_COMMAND:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 点击文件选择按钮时</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">LOWORD</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(wParam) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            // 调用文件选择对话框函数，允许用户选择文件</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">            OpenFileDialog</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(hwnd);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        break</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    case</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> WM_CREATE:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 创建选择文件按钮和结果文本框</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        CreateWindow</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            &quot;BUTTON&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                                              // 控件类型：按钮</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            &quot;Select File&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                                         // 按钮文本</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            WS_TABSTOP </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> WS_VISIBLE </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> WS_CHILD </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> BS_DEFPUSHBUTTON,</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 按钮样式：可见、子窗口、默认按钮</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            50</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">50</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                                                // 按钮位置：x=50, y=50</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            200</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">40</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                                               // 按钮大小：宽200, 高40</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            hwnd,</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                                                  // 父窗口句柄</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            (HMENU)</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                                              // 按钮的ID（用来标识按钮）</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            (HINSTANCE)</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">GetWindowLongPtr</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(hwnd, GWLP_HINSTANCE),</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     // 窗口实例句柄</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            NULL</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                                                   // 附加数据</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        );</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 创建一个文本框控件，用于显示预测结果</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        hResultTextBox </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CreateWindow</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            &quot;EDIT&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                                                         // 控件类型：编辑框（文本框）</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            &quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                                                             // 初始文本为空</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            WS_CHILD </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> WS_VISIBLE </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> WS_BORDER </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ES_MULTILINE </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ES_READONLY,</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 样式：子窗口、可见、带边框、支持多行、只读</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            50</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                                                        // 文本框位置：x=50, y=100</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            400</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">200</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                                                       // 文本框大小：宽400, 高200</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            hwnd,</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                                                           // 父窗口句柄</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            NULL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                                                           // 控件ID</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            (HINSTANCE)</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">GetWindowLongPtr</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(hwnd, GWLP_HINSTANCE),</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">              // 窗口实例句柄</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            NULL</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                                                            // 附加数据</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        );</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 加载背景图像</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        LoadBackgroundImage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(hwnd);</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 加载背景图像</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        break</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    case</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> WM_PAINT:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        PAINTSTRUCT ps;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        HDC hdc </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> BeginPaint</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(hwnd, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ps);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 绘制背景图像</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        DrawBackgroundImage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(hwnd, hdc);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        EndPaint</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(hwnd, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ps);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        break</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    case</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> WM_DESTROY:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 当窗口被销毁时，退出应用程序</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        PostQuitMessage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        break</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 对于没有处理的消息，调用默认窗口过程函数</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> DefWindowProc</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(hwnd, uMsg, wParam, lParam);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><hr>`,28)]))}const y=i(p,[["render",h]]);export{g as __pageData,y as default};
