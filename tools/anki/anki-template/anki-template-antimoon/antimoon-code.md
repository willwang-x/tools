<h1 align="center">
<br>
	<a href="https://www.wikiwand.com/en/List_of_data_structures">
  <img src="https://i.imgur.com/mhnN0Bk.png" alt="antimoon template - 1.5" width=42%">
  </a>
  <br><br>
Anki Template: Antimoon Code
  <br><br>
</h1>



## Code

Features

* blockquote the sentence
* style(underline) the expression
* toggle chinese 
* Add flow effect
* Add rank & freq



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