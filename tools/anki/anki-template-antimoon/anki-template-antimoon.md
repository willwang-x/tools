<h1 align="center">
<br>
	<a href="https://www.wikiwand.com/en/List_of_data_structures">
  <img src="https://i.imgur.com/DriXd2X.png" alt="antimoon template - 1.3" width=42%">
  </a>
  <br><br>
Anki Template: Antimoon
  <br><br>
</h1>

> If you want to learn English well, you cannot rely on English classes. You have to take control of your learning. We’ll show you how to do it in a fun and effective way. [[antimoon](http://www.antimoon.com/)]


## Why

我对语言的记忆需求：

* **精准理解**别人的表达
* **使用精准**的词汇表达

现在发现的最好的anki template是Antimoon。喜欢的原因是：

* 信息全面
* 格式好看
* 使用方便
* evidence-based
* 可以自定义

## How

目标是使卡片，small & connected & meaningful。现在workflow是：

* 获取表达：by ODH
* 优化记忆
	* 修改key, e.g. straight -> straight up 
	* 修改val，加粗核心解释
	* 补充卡片，在add-dw加入1，如果觉得表达很重要
	* 增加卡片，e.g. 增加词根lud in delude 

## What 

Antimoon的field：

* 单词 : expression [原划词助手字段] 
* 音标 : reading [原划词助手字段]
* 释义 : glossary [原划词助手字段]
* 句子 : sentence [原划词助手字段]
* 笔记 : note [原划词助手字段]
* 网址 : url [原划词助手字段]
* 音频 : audio [原划词助手字段]
* 柯林斯: collins [Antimoon新增字段]
* Vocab : vocab [Antimoon新增字段]
* Antimoon标志：add-dw [Antimoon新增字段]

想要了解：

* 词汇的重要性：词频
* 词汇的常用表达：搭配

关键词：

* FastWQ: 一个快速获取词典的含义的工具
* Antimoon template：一个由[老黄](https://www.laohuang.net/20180108/antimoon-template-3/)开发的anki template。It provides a easy way to generate 2 types of cards: definition-word & word-definition.


## Code

Features

* blockquote the sentence
* style(underline) the expression
* toggle chinese 



#### blockquote

``` html
<div class="section sentence">
<span id="expression">{{expression}}</span>
<br><br>
<blockquote><span id="sentence">{{sentence}}</span></blockquote>
</div>
```

``` css
blockquote {
padding: 10px 0 10px 15px;
    margin: 0 5px 10px;
    background: #f9f9f9;
    border-left: 5px solid black;
    /*margin: 1.5em 10px;*/
    /*padding: 0.5em 10px;*/
}
```
#### hightlight the expression

``` html
<head>
   <link href="_youdao.css" rel="stylesheet">
</head>
```

#### eudic search on iPhone 

``` html
<a onclick="event.stopPropagation();" href="eudic://x-callback-url/searchword?word={{text:expression}}&x-success=anki://">
<span id="expression">{{expression}}</span>
</a>
```

#### [hide](https://i.imgur.com/1oSc40S.png)/[show](https://i.imgur.com/8pGOLqi.png) Chinese
 
``` html
<div onclick="toggleTrans()">
<span>{{glossary}}</span>
</div>

<!-- script starts here -->
<script type="text/javascript">
toggleTrans();
</script>
```

``` javascript 
function toggleTrans(){

    var customized = []; //add your own css class here

    var general = ['font[color]']
    var ldoce4 = ['.L_DEC', '.L_CEX', '.L_DCH','b+b[style]','.L_CUK+font[style]'];
    var collins = ['.explanation_box>.text_blue', '.explanation_item li>p+p','.vExplain_r li>p+p'];
    var odh = ['.chn_tran', '.chn_sent'];

    var transClass = customized.concat(general,ldoce4,collins,odh).join();

    [].forEach.call(document.querySelectorAll(transClass), function(div) {
        div.classList.toggle('hidden');
    });
}
```