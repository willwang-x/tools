<head>
   <link href="_youdao.css" rel="stylesheet">
</head>


<!-- to set card type -->
<div id="cardtype" style='display:none'>{{Card}}</div>

<!-- to hide collins if you want to get collins detail in front side -->
{{#collins}}<div style='display:none'>{{collins}}</div>{{/collins}}

<!-- front section -->
{{#sentence}}

<div class="section sentence">
<tts preset="OS X Speech Synthesis (Tom)"><span id="expression">{{expression}}</span></tts>
<span id="reading">{{reading}}</span>
<span id="wordstar"></span>

<br><br>

<blockquote>
<span id="sentence">{{sentence}}</span>
</blockquote>

{{/sentence}}

<!-- placehoder for audio tag -->
<audio id="player" src=""></audio>

<!-- script starts here -->
<script type="text/javascript">
initConfig();
setWordHead();
</script>

