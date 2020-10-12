# Git: --distributed-is-the-new-centralized

![Git by Ruanyifeng](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015120901.png)

> Git is a version-control system for tracking changes in computer files and coordinating work on those files among multiple people. 

[Git map@workflowy](https://workflowy.com/s/BZDH.1aTOIGRJzF)

## Tools


|key|why|what|how|
|:--|:--|:--|:--|
|[Cheatsheet](http://ndpsoftware.com/git-cheatsheet.html)|Whole picture| [<img src="https://i.imgur.com/rNLeezQ.jpg" alt="git cheatsheet" width="200"/>](http://ndpsoftware.com/git-cheatsheet.html#loc=local_repo;) |check|
|[Cheatsheet](http://ndpsoftware.com/git-cheatsheet.html)|search|[<img src="https://i.imgur.com/I1DE9J9.png" alt="git cheatsheet pdf" width="200"/>](https://education.github.com/git-cheat-sheet-education.pdf)|check|


## What 

- [Index](https://gitolite.com/uses-of-index.html): The index (or any of its other names) is essentially a **“holding area”** for changes that will be committed when you next do git commit. The index allows you to **control what parts of the working tree** go into the repository on the next “commit” operation.
	- staging helps you split up one large change into multiple commits
	- staging helps in reviewing changes
	- staging helps when a merge has conflicts
	- staging helps you keep extra local files hanging around
	- staging helps you sneak in small changes ;-)

 


## Reference 

- [Books: Pro Git](https://git-scm.com/book/en/v2): Git expert x Git development workflow 
- [Git Documentation](https://git-scm.com/doc): Official 
- [Version Control with Git, 2nd Ed](https://book.douban.com/subject/26341974/): 
	- "看了好几本，包括官方文档，此书最好！git是程序员的强力工具，早日掌握早日受用。" 
	- 用于实践查找原理。
	- “和其它几本Git的书比起来, 这本对细节讲得都比较细, 而且思路也比较清晰, 看起来比较轻松”
- [7 Best Git Books](https://www.fromdev.com/2015/02/best-git-books.html)
- [Git Explorer](https://gitexplorer.com/): Easy way to learn and search git commands. 
- [Visualizing Git Commands Using M&Ms and Pocky
](https://www.youtube.com/watch?v=ko3onK77Ni0)

## Example 

```
git push -u origin master
```

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

