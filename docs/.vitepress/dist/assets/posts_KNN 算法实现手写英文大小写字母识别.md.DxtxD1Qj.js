import{_ as p,c as a,aN as n,j as s,o as l}from"./chunks/framework.C12FJ_o-.js";const A=JSON.parse('{"title":"KNN 算法实现手写英文大小写字母识别","description":"这是福轩放在这里的第一篇文章，用来测试一下这个博客系统。","frontmatter":{"title":"KNN 算法实现手写英文大小写字母识别","tags":["KNN"],"categories":["新的开始"],"date":"2024-12-11T00:00:00.000Z","description":"这是福轩放在这里的第一篇文章，用来测试一下这个博客系统。","articleGPT":"福轩说什么，你就听什么。","references":[{"title":"vitepress-theme-curve","url":"https://github.com/imsyy/vitepress-theme-curve"}]},"headers":[],"relativePath":"posts/KNN 算法实现手写英文大小写字母识别.md","filePath":"posts/KNN 算法实现手写英文大小写字母识别.md"}'),h={name:"posts/KNN 算法实现手写英文大小写字母识别.md"},k={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},t={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.685ex"},xmlns:"http://www.w3.org/2000/svg",width:"12.628ex",height:"2.572ex",role:"img",focusable:"false",viewBox:"0 -833.9 5581.7 1136.7","aria-hidden":"true"},e={tabindex:"0",class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},E={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-1.577ex"},xmlns:"http://www.w3.org/2000/svg",width:"2.946ex",height:"4.104ex",role:"img",focusable:"false",viewBox:"0 -1117 1302 1814","aria-hidden":"true"};function r(d,i,g,y,c,F){return l(),a("div",null,[i[4]||(i[4]=n(`<h1 id="knn-算法实现手写英文大小写字母识别" tabindex="-1">KNN 算法实现手写英文大小写字母识别 <a class="header-anchor" href="#knn-算法实现手写英文大小写字母识别" aria-label="Permalink to &quot;KNN 算法实现手写英文大小写字母识别&quot;">​</a></h1><h2 id="一、编程语言及运行环境" tabindex="-1">一、编程语言及运行环境 <a class="header-anchor" href="#一、编程语言及运行环境" aria-label="Permalink to &quot;一、编程语言及运行环境&quot;">​</a></h2><p>编程语言：C开发工具：<code>gcc</code>软件环境：Visual Studio Code硬件环境：</p><ul><li><strong>CPU</strong>：</li><li><strong>内存</strong>：</li><li><strong>操作系统</strong>：</li></ul><hr><h2 id="二、数据结构" tabindex="-1">二、数据结构 <a class="header-anchor" href="#二、数据结构" aria-label="Permalink to &quot;二、数据结构&quot;">​</a></h2><h3 id="主要数据结构" tabindex="-1">主要数据结构 <a class="header-anchor" href="#主要数据结构" aria-label="Permalink to &quot;主要数据结构&quot;">​</a></h3><ol><li><strong>图像矩阵</strong>：二维数组 <code>int matrix[32][32]</code>，存储 32×32 的二值化图像。</li><li><strong>图像向量</strong>：一维数组 <code>double vector[VECTOR_SIZE]</code>，用来存储矩阵展平后的 1024 维特征向量。</li><li><strong>标签数组</strong>：二维字符数组 <code>char labels[LABEL_SIZE][55]</code>，存储每个样本的标签，共支持大小写字母和数字标签。</li><li><strong>距离数组</strong>：一维数组 <code>double distances[LABEL_SIZE * 55]</code>，存储测试样本与训练样本之间的欧几里得距离。</li></ol><hr><h2 id="三、设计思想" tabindex="-1">三、设计思想 <a class="header-anchor" href="#三、设计思想" aria-label="Permalink to &quot;三、设计思想&quot;">​</a></h2><h3 id="总体设计" tabindex="-1">总体设计 <a class="header-anchor" href="#总体设计" aria-label="Permalink to &quot;总体设计&quot;">​</a></h3><p>采用 KNN（K-Nearest Neighbors）算法，识别手写英文大小写字母。核心思想是通过计算测试样本与训练样本的距离，根据最近的 K 个邻居判断所属类别。</p><h3 id="具体流程" tabindex="-1">具体流程 <a class="header-anchor" href="#具体流程" aria-label="Permalink to &quot;具体流程&quot;">​</a></h3><ol><li><strong>加载背景图像</strong>：为程序窗口绘制背景，增强用户体验。</li><li><strong>数据加载</strong>：从本地读取训练样本的 32×32 二值化矩阵，转换为 1024 维向量存储。</li><li><strong>距离计算</strong>：基于欧几里得公式，计算测试样本与训练样本的距离，存储到 <code>distances</code> 数组中。</li><li><strong>排序与选择</strong>：对距离数组进行升序排序，选取距离最小的 K 个样本的标签。</li><li><strong>结果投票</strong>：统计 K 个标签中出现次数最多的类别作为最终结果。</li><li><strong>显示结果</strong>：通过窗口显示最终预测结果。</li></ol><hr><h2 id="四、成员分工" tabindex="-1">四、成员分工 <a class="header-anchor" href="#四、成员分工" aria-label="Permalink to &quot;四、成员分工&quot;">​</a></h2><h3 id="总体分工" tabindex="-1">总体分工 <a class="header-anchor" href="#总体分工" aria-label="Permalink to &quot;总体分工&quot;">​</a></h3><p>所有成员的代码行数与工作量大致均衡。各自负责一个功能模块，同时共同协作完成程序的集成与测试。</p><p>| 学号 | 姓名 | 模块任务分工 | 模块功能详细概述 | |: ---------- 😐 :---: |: ----------: | -------------------------- | | 2024092120 | 董安琪 | 数据加载与预处理模块 | 负责矩阵加载、图像向量化及标签创建。 | | 2024092119 | 孔雅茵 | 距离计算与排序模块 | 负责计算欧几里得距离，完成排序与最近邻提取。 | | 2024092102 | 王紫晴 | 图形界面与结果显示 | 负责界面设计、文件选择功能、结果显示与最终集成测试。 |</p><h3 id="详细任务分工" tabindex="-1">详细任务分工 <a class="header-anchor" href="#详细任务分工" aria-label="Permalink to &quot;详细任务分工&quot;">​</a></h3><h4 id="成员-1-的工作" tabindex="-1">成员 1 的工作 <a class="header-anchor" href="#成员-1-的工作" aria-label="Permalink to &quot;成员 1 的工作&quot;">​</a></h4><ul><li><p><strong>学号</strong>：2024092120</p></li><li><p><strong>姓名</strong>：董安琪</p></li><li><p><strong>任务分工</strong>：数据加载与预处理模块</p><ul><li>加载训练集矩阵（<code>read_matrix</code> 函数）</li><li>图像矩阵向量化（<code>matrix_to_vector</code> 函数）</li><li>标签创建（<code>create_labels</code> 函数）</li></ul></li><li><p><strong>设计思想</strong>：</p><ol><li>从本地训练数据文件中逐行读取 32×32 的二值化矩阵。</li><li>使用 <code>matrix_to_vector</code> 函数，将矩阵展平为 1024 维向量，供后续算法使用。</li><li>创建 <code>labels</code> 数组，预定义大小写字母及数字标签。</li><li>确保预处理后的数据能够正确传递至后续模块。</li></ol></li><li><p>代码行数：</p></li><li><p>实验代码及注释：</p></li></ul><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 从文件中读取32x32的矩阵表示图像</span></span>
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
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h1 id="n你" tabindex="-1">n你 <a class="header-anchor" href="#n你" aria-label="Permalink to &quot;n你&quot;">​</a></h1><h2 id="能否割让i" tabindex="-1">能否割让i <a class="header-anchor" href="#能否割让i" aria-label="Permalink to &quot;能否割让i&quot;">​</a></h2><blockquote><p>grh hhhjj</p></blockquote><hr><p><code>print</code> 语句</p>`,34)),s("p",null,[s("mjx-container",k,[(l(),a("svg",t,i[0]||(i[0]=[n('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="msub"><g data-mml-node="mi"><path data-c="1D465" d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z" style="stroke-width:3;"></path></g><g data-mml-node="mn" transform="translate(605,-150) scale(0.707)"><path data-c="31" d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z" style="stroke-width:3;"></path></g></g><g data-mml-node="mo" transform="translate(1230.8,0)"><path data-c="2B" d="M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z" style="stroke-width:3;"></path></g><g data-mml-node="msub" transform="translate(2231,0)"><g data-mml-node="mi"><path data-c="1D465" d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z" style="stroke-width:3;"></path></g><g data-mml-node="mn" transform="translate(605,-150) scale(0.707)"><path data-c="32" d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z" style="stroke-width:3;"></path></g></g><g data-mml-node="mo" transform="translate(3517.3,0)"><path data-c="3D" d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z" style="stroke-width:3;"></path></g><g data-mml-node="msubsup" transform="translate(4573.1,0)"><g data-mml-node="mi"><path data-c="1D465" d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z" style="stroke-width:3;"></path></g><g data-mml-node="mn" transform="translate(605,363) scale(0.707)"><path data-c="32" d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z" style="stroke-width:3;"></path></g><g data-mml-node="mn" transform="translate(605,-287.2) scale(0.707)"><path data-c="33" d="M127 463Q100 463 85 480T69 524Q69 579 117 622T233 665Q268 665 277 664Q351 652 390 611T430 522Q430 470 396 421T302 350L299 348Q299 347 308 345T337 336T375 315Q457 262 457 175Q457 96 395 37T238 -22Q158 -22 100 21T42 130Q42 158 60 175T105 193Q133 193 151 175T169 130Q169 119 166 110T159 94T148 82T136 74T126 70T118 67L114 66Q165 21 238 21Q293 21 321 74Q338 107 338 175V195Q338 290 274 322Q259 328 213 329L171 330L168 332Q166 335 166 348Q166 366 174 366Q202 366 232 371Q266 376 294 413T322 525V533Q322 590 287 612Q265 626 240 626Q208 626 181 615T143 592T132 580H135Q138 579 143 578T153 573T165 566T175 555T183 540T186 520Q186 498 172 481T127 463Z" style="stroke-width:3;"></path></g></g></g></g>',1)]))),i[1]||(i[1]=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("msub",null,[s("mi",null,"x"),s("mn",null,"1")]),s("mo",null,"+"),s("msub",null,[s("mi",null,"x"),s("mn",null,"2")]),s("mo",null,"="),s("msubsup",null,[s("mi",null,"x"),s("mn",null,"3"),s("mn",null,"2")])])],-1))])]),s("mjx-container",e,[(l(),a("svg",E,i[2]||(i[2]=[n('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mfrac"><g data-mml-node="mi" transform="translate(386.5,676)"><path data-c="1D44E" d="M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z" style="stroke-width:3;"></path></g><g data-mml-node="mrow" transform="translate(220,-686)"><g data-mml-node="mi"><path data-c="1D44F" d="M73 647Q73 657 77 670T89 683Q90 683 161 688T234 694Q246 694 246 685T212 542Q204 508 195 472T180 418L176 399Q176 396 182 402Q231 442 283 442Q345 442 383 396T422 280Q422 169 343 79T173 -11Q123 -11 82 27T40 150V159Q40 180 48 217T97 414Q147 611 147 623T109 637Q104 637 101 637H96Q86 637 83 637T76 640T73 647ZM336 325V331Q336 405 275 405Q258 405 240 397T207 376T181 352T163 330L157 322L136 236Q114 150 114 114Q114 66 138 42Q154 26 178 26Q211 26 245 58Q270 81 285 114T318 219Q336 291 336 325Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(429,0)"><path data-c="1D450" d="M34 159Q34 268 120 355T306 442Q362 442 394 418T427 355Q427 326 408 306T360 285Q341 285 330 295T319 325T330 359T352 380T366 386H367Q367 388 361 392T340 400T306 404Q276 404 249 390Q228 381 206 359Q162 315 142 235T121 119Q121 73 147 50Q169 26 205 26H209Q321 26 394 111Q403 121 406 121Q410 121 419 112T429 98T420 83T391 55T346 25T282 0T202 -11Q127 -11 81 37T34 159Z" style="stroke-width:3;"></path></g></g><rect width="1062" height="60" x="120" y="220"></rect></g></g></g>',1)]))),i[3]||(i[3]=s("mjx-assistive-mml",{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("mfrac",null,[s("mi",null,"a"),s("mrow",null,[s("mi",null,"b"),s("mi",null,"c")])])])],-1))])])}const D=p(h,[["render",r]]);export{A as __pageData,D as default};
