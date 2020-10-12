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

## Code - 4.0 

### Front Template

``` js
<!-- to set card type -->
<div id="cardtype" style='display:none'>{{Card}}</div>

<!-- to hide collins if you want to get collins detail in front side -->
{{#collins}}<div style='display:none'>{{collins}}</div>{{/collins}}

<!-- front section -->
<div class="section english" onclick="playAudio()">
<a onclick="event.stopPropagation();" href="eudic://x-callback-url/searchword?word={{text:expression}}&x-success=anki://"><img class="icon" src="_eudict_24.png"></a>
<span id="expression">{{expression}}</span>
<span id="reading">{{reading}}</span>
<span id="wordstar"></span>
{{#audio}}
<span id="audio" onclick="event.stopPropagation();">{{audio}}</span>
{{/audio}}
</div>

{{#sentence}}
<div class="section sentence"><span id="sentence">{{sentence}}</span></div>
{{/sentence}}

<!-- placehoder for audio tag -->
<audio id="player" src=""></audio>

<!-- script starts here -->
<script type="text/javascript">
initConfig();
setWordHead();
</script>


```

### Back Template

``` js
{{FrontSide}}

<hr>

<!-- back section -->
{{#collins}}
<div class="section collins"><span id="collins">{{collins}}</span></div>
{{/collins}}

{{#vocab}}
<div class="section vocab"><span id="vocab">{{vocab}}</span></div>
{{/vocab}}

<div class="section chinese" onclick="showChinese('chinese')">
<span id="chinese">{{glossary}}</span>
</div>

<!-- script starts here -->
<script type="text/javascript">
setDefinition();
setChinese();
</script>
```
