<h1 align="center">
<br>
	<a href="https://git-scm.com/docs/gitglossary">
  <img src="https://i.imgur.com/cYQJCWR.png" alt="map of git" width=42%">
  </a>
  <br><br>
git glossary  
<br><br>
</h1>

> gitglossary - A Git Glossary [[wiki](https://git-scm.com/docs/gitglossary)]

## Why 

* basics

## How

* Met
* Record

## What 

* **stash entry**: An **object** used to temporarily store the contents of a **dirty** working directory and the index for future reuse.
* **object**: The **unit** of storage in Git. It is uniquely identified by the SHA-1 of its contents. Consequently, an object cannot be changed.
* **dirty**: A **working tree** is said to be "dirty" if it contains **modifications** which have not been **committed** to the current branch.
* **commit**: 
	* As a noun: A single point in the Git history; the entire history of a project is represented as a set of interrelated commits. The word "commit" is often used by Git in the same places other revision control systems use the words "revision" or "version". Also used as a short hand for **commit object**.
	* As a verb: The action of storing a new snapshot of the project’s state in the Git history, by creating a new commit representing the current state of the **index** and advancing **HEAD** to point at the new commit. 
* **index**: **A collection of files** with stat information, whose contents are stored as objects. The index is a stored version of your working tree. Truth be told, it can also contain a second, and even a third version of a working tree, which are used when merging.
* **working tree**: The tree of actual checked out **files**. The working tree normally contains **the contents** of the HEAD commit’s tree, plus any local changes that you have made but not yet committed.
* **HEAD**: The current branch. In more detail: Your working tree is normally derived from the state of the tree referred to by HEAD. HEAD is a reference to one of the heads in your repository, except when using a detached HEAD, in which case it directly references an arbitrary commit.
* **branch**: A "branch" is an **active line** of development. The most recent commit on a branch is referred to as the tip of that branch. The tip of the branch is referenced by a branch head, which moves forward as additional development is done on the branch. A single Git repository can track an arbitrary number of branches, but your working tree is associated with just one of them (the "current" or "checked out" branch), and HEAD points to that branch.
* head: A named **reference** to the commit at the **tip** of a branch. Heads are stored in a file in `$GIT_DIR/refs/heads/` directory, except when using packed refs. (See git-pack-refs[1].)
* **repository**: A collection of **refs** together with an **object database** containing all objects which are **reachable** from the refs, possibly accompanied by meta data from one or more **porcelains**. A repository can share an object database with other repositories via **alternates mechanism**.



## FAQs

#### Q: keywords vs ?

A: 


