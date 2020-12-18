<h1 align="center">
<br>
	<a href="http://ndpsoftware.com/git-cheatsheet.html">
  <img src="http://www.ruanyifeng.com/blogimg/asset/2015/bg2015120901.png" alt="git workflow" width=42%">
  </a>
  <br><br>
Git
  <br><br>
</h1>

> Git is a **distributed version-control system** for tracking changes in any set of files, originally designed for coordinating work among programmers cooperating on source code during software development. [[wiki](https://www.wikiwand.com/en/Git)]

## Why 

Git是程序员的强力工具，早日掌握早日受用。

## How

### MAKE

* [map](https://workflowy.com/s/BZDH.1aTOIGRJzF): list of git commands
* [cheatsheet](http://ndpsoftware.com/git-cheatsheet.html): [interactive](http://ndpsoftware.com/git-cheatsheet.html), [pdf](https://education.github.com/git-cheat-sheet-education.pdf)
* [explorer](https://gitexplorer.com/): Easy way to learn and search git commands. 
* [documentation](https://git-scm.com/doc): Official 
* [books](https://www.fromdev.com/2015/02/best-git-books.html): [Pro Git](https://git-scm.com/book/en/v2), [Version Control with Git](https://book.douban.com/subject/26341974/)
* [visualization](https://www.youtube.com/watch?v=ko3onK77Ni0): Visualizing Git Commands Using M&Ms and Pocky
* [wikibooks](https://en.wikibooks.org/wiki/Git)
* [tutorials](https://www.atlassian.com/git/tutorials)

## What 

### overview

Git is a **distributed version-control system** for tracking **changes** in any set of files, originally designed for **coordinating** work among programmers cooperating on source code during software development. Its goals include **speed**, **data integrity**, and support for distributed, non-linear workflows.

### history
 
Git was created by **Linus Torvalds** in **2005** for development of the Linux kernel, with other kernel developers contributing to its initial development. Since 2005, **Junio Hamano** has been the core maintainer. As with most other distributed version-control systems, and unlike most client–server systems, every Git directory on every computer is a full-fledged repository with complete history and full version-tracking abilities, independent of network access or a central server. Git is free and open-source software distributed under GNU General Public License Version 2.

## FAQs

#### Q: What is the use of index?

[A](https://gitolite.com/uses-of-index.html): The index (or any of its other names) is essentially a **“holding area”** for changes that will be committed when you next do git commit. The index allows you to **control what parts of the working tree** go into the repository on the next “commit” operation.

* staging helps you split up one large change into multiple commits
* staging helps in reviewing changes
* staging helps when a merge has conflicts
* staging helps you keep extra local files hanging around
* staging helps you sneak in small changes ;-)


#### Q: What is the meaning of `git push -u origin master`?

A: 

- **`git push [variable name] [branch]`**: to send the branch commits to your remote repository.
- [**origin**](https://www.git-tower.com/learn/git/glossary/origin#:~:text=In%20Git%2C%20%22origin%22%20is,but%20just%20a%20standard%20convention.): a shorthand name for the remote **repository** that a project was originally cloned from.  
	- 	- **`<remote>`** can be the name of a configured remote or a full URL to a remote git repository. 
	-  = *git push -u https://github.com/willwang-x/cs-cornerstone master*
- **master**: stands for the main branch
- **`-u`**: The **-u** tells Git to remember the parameters, so that next time we can simply run `git push` and Git will know what to do.
- **[upstream](https://stackoverflow.com/questions/5561295/what-does-git-push-u-mean)**: would refer to the main repo that other people will be pulling from, e.g. your GitHub repo. 
	- [check upstream](https://higoge.github.io/2015/07/06/git-remote03/):
	- [`cat .git/config`](https://i.imgur.com/NSURctB.png): [remote "origin"] url = https://github.com/willwang-x/cs-cornerstone 
	- [`git remote show origin`](https://i.imgur.com/dPf0499.png): Push  URL: https://github.com/willwang-x/cs-cornerstone

	
#### Q: What is a great Git commit message?

[A](https://chris.beams.io/posts/git-commit/#seven-rules): 7 rules of a great Git commit message:

1. **Separate** **subject** from **body** with a blank line
1. Limit the **subject** line to **50** characters
1. **Capitalize** the subject line
1. Do **not end** the subject line with a **period**
1. Use the **imperative** mood in the subject line
1. Wrap the body at **72** characters
1. Use the **body** to explain **what** and **why** vs. **how**


