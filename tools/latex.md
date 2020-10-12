# LaTeX: a high-quality typesetting system

 

![Latex](https://i.imgur.com/5pR1aKq.png)

> from [从零开始 LaTeX 快速入门](http://liuchengxu.org/blog-cn/posts/quick-latex/)

## Why 

- separates the content of the document from the style: Once you have written the content of your document, we can change its appearance with ease. 
- quickly tackle the more complicated parts of typesetting
- a consistent layout across all sections
- the huge number of open source packages available
- “LaTeX可以保留写作的全过程，而word只能保留最终结果。” by [组诗耶](https://www.zhihu.com/question/24337529/answer/32587191)
- LaTeX + 版本控制，完爆Word。

## What 

> LATEX (pronounced LAY-tek or LAH-tek) is a tool used to create professional-looking documents. It is based on the WYSIWYM (what you see is what you mean) idea, meaning you only have focus on the contents of your document and the computer will take care of the formatting. Instead of spacing out text on a page to control formatting, as with Microsoft Word or LibreOffice Writer, **users can enter plain text and let LATEX take care of the rest.**



- [Package](http://topspeedsnail.com/d-latex-package-intro/): allow users to do even more with LATEX, such as add footnotes, draw schematics, create tables etc.
	- CJKutf8: CJKutf8 patches original CJK package to make it work well with inputenc. And it loads inputenc package with utf8 option internally. 
- **preamble**: you define the **type** of document you are writing, the **language** you are writing in, the **packages** you would like to use (more on this later) and several other elements. 
- [LaTeX engines](https://en.wikibooks.org/wiki/LaTeX/Basics#Historical_versions_of_LaTeX): lualatex, xelatex, and pdflatex
- [documentclass](https://en.wikibooks.org/wiki/LaTeX/Document_Structure#Document_classes): When processing an input file, LaTeX needs to know which **layout** standard to use. Layouts standards are contained within 'class files' which have `.cls` as their filename extension. 
	- `\documentclass[11pt,twoside,a4paper]{article}`: instructs LaTeX to typeset the document as an **article** with a base **font size** of 11 points, and to produce a layout suitable for **double sided** printing on **A4 paper**. 
- [LaTeX Spaces and Boxes](http://www.personal.ceu.hu/tex/spacebox.htm)

 

## How 

- [Learn LaTeX in 30 minutes](https://www.overleaf.com/learn/latex/Learn_LaTeX_in_30_minutes)
- [LaTeX cheat sheet](https://wch.github.io/latexsheet/)
- [List of LaTeX mathematical symbols](https://oeis.org/wiki/List_of_LaTeX_mathematical_symbols)
- [wikibook/LATEX](https://en.wikibooks.org/wiki/LaTeX)


**Download**:

- `brew cask install basictex`
	- pros: ~90 MB.
	- cons: you will be faced with the tasks of installing additional programs and installing missing packages. 
- `brew cask install mactex` 
	- pros: contains the latest TeXLive distribution and it contains everything up to, and including the kitchen sink, then heaps on yet more stuff.  
	- cons: Too big! Odds are, out of that 1.3 GB archive you will only use 300-400 MB worth of files on a regular basis. 

## Q&A

> [The TeX Frequently Asked Question List](https://texfaq.org/)


- [I want to start using LaTeX on Mac OS X. Where do I start?](https://tex.stackexchange.com/questions/220/i-want-to-start-using-latex-on-mac-os-x-where-do-i-start)
- [Where do I get the pdflatex program for Mac?](https://superuser.com/questions/1038612/where-do-i-get-the-pdflatex-program-for-mac)
- [Why is the MacTeX distribution so large? Is there anything smaller for OS X?](https://tex.stackexchange.com/questions/974/why-is-the-mactex-distribution-so-large-is-there-anything-smaller-for-os-x)
- [Chinese?](https://www.overleaf.com/learn/latex/Chinese): The recommended approach is to use the XƎLATEX or LuaLATEX compilers, as they support UTF-8 directly and allows more flexibility to work with true type and opentype fonts. See this article to learn how to change the compiler in Overleaf.
- [How to Use Chinese with LaTeX?](https://jdhao.github.io/2018/03/29/latex-chinese/)
- [Packages CJK versus CJKutf8?](https://tex.stackexchange.com/questions/223237/packages-cjk-versus-cjkutf8)
- [Latex中文utf-8编码的三种方式](https://www.cnblogs.com/dezheng/p/3874434.html)



## More

- [TeXmacs：一个真正“所见即所得”的排版系统](http://www.yinwang.org/blog-cn/2012/09/18/texmacs)	
- [The Com­pre­hen­sive TEX Archive Net­work (CTAN)](https://ctan.org/): The Com­pre­hen­sive TEX Archive Net­work (CTAN) is the cen­tral place for all kinds of ma­te­rial around TEX. CTAN has cur­rently 5669 pack­ages. 
- [原LaTeX基本命令使用教程（清晰实例）（Overleaf平台）（论文排版）](https://blog.csdn.net/Gentleman_Qin/article/details/79963396)
- [simple book for x](https://www.overleaf.com/project/5cf2bcbe520567374571199e)
- [markdown in latex](http://mirrors.ibiblio.org/CTAN/macros/generic/markdown/markdown.pdf)
