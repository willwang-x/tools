# Anki Template: ios shortcut

![ex](https://i.imgur.com/ypt9zgg.png)

## Why 

* 视觉重点明确
* UI互动感人

## Front Template

``` js
<head>
    <meta charset="UTF-8">
    <style>
        body {
            padding-top: 0px;
            font-family: sans-serif;
            color: #1d2129;
            background-color: #e9ebee;
            padding-bottom: 40px;
        }
    </style>

    <link href="_youdao.css" rel="stylesheet">
</head>

<div class="container-fluid text-left">
    <div class=row-fluid>
        <div class=cell>
            <h3 style="margin-left: 5px">文摘原句</h3>
            <br>
            <blockquote>
                <div style="font-size:15px">
                    {{ sentence }}
                </div>
        </div>
        </blockquote>
    </div>

</div>
<script>
    
    function remove_collins_word() {
            var doc = document;
            var collins_entries = doc.getElementsByClassName("per-collins-entry");
            var h4s = doc.getElementsByTagName("h4");
            for (var j = 0; j < h4s.length; j++) {
                var h4 = h4s[j];
                h4.style.display = "none";
            }
            for (var i = 0; i < collins_entries.length; i++) {
                var collins_entry = collins_entries[i];
                var start_elements = collins_entry.getElementsByClassName("star");
                if (start_elements && start_elements.length === 1) {
                    start_el = start_elements[0];
                    var cixing = collins_entry.childNodes[0];
                    collins_entry.innerHTML = collins_entry.innerHTML.replace(cixing.wholeText, cixing.wholeText + start_el.outerHTML)
                }
            }
 collins_entry.innerHTML = get_collins_phetic() + collins_entry.innerHTML;
        }
        
    function get_collins_phetic() {
        var doc = document;
        var ph_tags = doc.getElementsByClassName("phonetic");
        if (ph_tags) {
            var ph_tag = ph_tags[0];
            return "<span style='font-size: 21px'>" + ph_tag.outerHTML + "</span>";
        }
       
    }
</script>

```

## Back Template


```js
{{ FrontSide }}


{{#collins1}}
<div class="container-fluid text-left slidetop">
    <div class=row-fluid>
        <div class=cell>
            <h3 style="margin-left: 5px">生词释义</h3>
            <br>
            <span class=collins id=collins1> {{ collins1 }}</span>
        </div>
    </div>
</div>
{{/collins1}}
{{#collins2}}
<div class="container-fluid text-left slidetop">
    <div class=row-fluid>
        <div class=cell>
            <h3 style="margin-left: 5px">生词释义</h3>
            <br>
            <span class=collins id=collins2> {{ collins2 }}</span>
        </div>
    </div>
</div>
{{/collins2}}
{{#collins3}}
<div class="container-fluid text-left slidetop">
    <div class=row-fluid>
        <div class=cell>
            <h3 style="margin-left: 5px">生词释义</h3>
            <br>
            <span class=collins id=collins3> {{ collins3 }}</span>
        </div>
    </div>
</div>
{{/collins3}}
{{#collins4}}
<div class="container-fluid text-left slidetop">
    <div class=row-fluid>
        <div class=cell>
            <h3 style="margin-left: 5px">生词释义</h3>
            <br>
            <span class=collins id=collins4> {{ collins4 }}</span>
        </div>
    </div>
</div>
{{/collins4}}
{{#collins5}}
<div class="container-fluid text-left slidetop">
    <div class=row-fluid>
        <div class=cell>
            <h3 style="margin-left: 5px">生词释义</h3>
            <br>
            <span class=collins id=collins5> {{ collins5 }}</span>
        </div>
    </div>
</div>
{{/collins5}}

<div style="font-size:10px;text-align: center;" id='mp'>
    {{#公众号}}{{ hint:公众号}}{{/公众号}}
</div>

<script>
    function _decode_collins(tag_id) {
        try {
            var collins_span = document.getElementById(tag_id);
            collins_span.innerHTML = decodeURIComponent(atob(collins_span.innerText));
        } catch (e) {
        }
    }
    var tag_ids = ['collins1', 'collins2', 'collins3', 'collins4', 'collins5'];
    tag_ids.forEach(_decode_collins);
</script>
```

## Styling 

``` css	
@import url("_editor_button_styles.css");

.card {
    font-family: "Microsoft YaHei", Helvetica, sans-serif;
    color: #1d2129;
    background-color: #e9ebee;
}

.row-fluid {
    text-align: left;
    margin-top: 10px;
    margin-bottom: 4px;
    background-color: #fff;
    border: 1px solid;
    border-color: #e5e6e9 #dfe0e4 #d0d1d5;
    border-radius: 8px;
}

.cell {
    padding: 10px 10px 10px 10px;
}

.hint {
    display: block;
    line-height: 20px;
    color: #999999;
    margin-right: 10px;
    /*margin-left: 10px;*/
    margin-top: 10px;
}


blockquote {
padding: 10px 0 10px 15px;
    margin: 0 5px 10px;
    background: #f9f9f9;
    border-left: 5px solid black;
    /*margin: 1.5em 10px;*/
    /*padding: 0.5em 10px;*/
}

.slidetop {
    position: relative;
    -webkit-animation: slidetop 0.5s 0s;
    -webkit-animation-fill-mode: forwards;
}

@-webkit-keyframes slidetop {
    0% {
        opacity: 0;
        top: 50px;
    }
    50% {
        opacity: 0.8;
        top: -5px;
    }
    80% {
        opacity: 0.95;
        top: 0px;
    }
    100% {
        opacity: 1;
        top: 0px;
    }
}

```