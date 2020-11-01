# Anki Template: Antimoon


![ex-seductive](https://i.imgur.com/XkJ7T6t.png)

## Why

It is Good way to learn language by this template (by [老黄](https://www.laohuang.net/20180108/antimoon-template-3/)). It provides a easy way to generate 2 types of cards: definition-word & word-definition.

* 特别喜欢definition-word: `___`的提醒，达到了**会与不会，瞬间抉择**的效果，即复习很快。
* 列出在这里，便于修改成自己喜欢的样子。


## What 

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

## How

我需要的东西：

* 单词词根：准确理解词语
* 单词词频：知道常用含义是什么


如何做：

* 结合FastWQ: 去获得词频和词根信息。

## Code

blockquote

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
hightlight the expression

``` html
<head>
   <link href="_youdao.css" rel="stylesheet">
</head>
```

eudic search on iPhone 

``` html
<a onclick="event.stopPropagation();" href="eudic://x-callback-url/searchword?word={{text:expression}}&x-success=anki://">
<span id="expression">{{expression}}</span>
</a>
```

[hide](https://i.imgur.com/1oSc40S.png)/[show](https://i.imgur.com/8pGOLqi.png) Chinese
 
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