<h1 align="center">
<br>
	<a href="https://ankiatts.appspot.com/">
  <img src="https://i.imgur.com/qrlIukK.png" alt="Awesome TTS for Anki" width=42%">
  </a>
  <br><br>
Awesome TTS
  <br><br>
</h1>

> AwesomeTTS makes it easy for language-learners and other students to add speech to their personal Anki card decks. [[github](https://github.com/AwesomeTTS/awesometts-anki-addon)]


## Why 

在打开词汇卡片，同时发出读音，可： 

* 帮助识别语音
* 作为卡片音效
* 没有增加额外时间

## How 

You can customize the **speed**, **voices** and **design** of your cards.

1. Download [TTS](https://ankiweb.net/shared/info/1436550454)
1. Set up following [the tutorial](https://www.youtube.com/watch?v=5QFDrY7PDUk)
1. add `<tts>` by click the button [Add TTS](https://i.imgur.com/n9XUJCq.png)

``` javascript
<p hidden>

{{tts en_US voices=AwesomeTTS:Title}}

</p>
```

## What 

AwesomeTTS makes it easy for language-learners and other students to add speech to their personal Anki card decks. AwesomeTTS supports both **on-demand** playback and **synchronizing** audio files with your card deck, making it flexible enough for different needs.

## FAQs

#### [Q](https://www.reddit.com/r/Anki/comments/80ihjz/awesometts_tts_only_cloze_deletion_not_the_whole/):  TTS only cloze deletion (not the whole phrase/field)?

A: `cloze-only`:

``` css
{{tts en_US voices=AwesomeTTS:cloze-only:Text}}
```

source: [How to use Anki's Text-To-Speech (TTS)](https://www.youtube.com/watch?v=5QFDrY7PDUk)