
<h1 align="center">
<br>
	<a href="https://www.wikiwand.com/en/Anki_(software)">
  <img src="https://i.imgur.com/NrICwZh.png" alt="How to remember anything forever" width=42%">
  </a>
  <br><br>
Anki in Practice
  <br><br>
</h1>


> "The single biggest change that Anki brings about is that it means memory is no longer a haphazard event, to be left to chance. Rather, it guarantees I will remember something, with minimal effort. That is, Anki makes memory a choice." 
> 
> Michael A. Nielsen, "Augmenting Long-term Memory"

## Why?

大一开始接触Anki，在弃疗和捡起反复摇摆之后，成为了终身爱好者 <sup>hopefully</sup>。三个方面来说说为什么：

* **需要**：生活本质上是一个认知处理过程，好的生活来自好的认知，好的认知的基础之一则是好的记忆。而Anki正是那块**记忆面包**。
* **喜欢**：在记忆面包类[软件](https://www.wikiwand.com/en/List_of_flashcard_software)中，Anki 核心稳定，扩展繁荣。全平台支持，高度自定义，击中了我的[工具观](https://willwang.cc/2019/03/tools)。
* **适合**：作为一个长期主义者和笔记爱好者，Anki正是最好的[补充](https://github.com/willwang-x/workflow) —— 有效打磨且**记住**细节。


## How?

> Small, connected, meaningful. - [How to remember anything forever](https://ncase.me/remember/)

如何高效完成每一次的Anki？

* 完成：复习完今日任务 with [BGM](https://open.spotify.com/playlist/0jNPAzlNyegnHDwGt8Jq7H?si=q8OTXKg5RLqV5ABH_SHlIw)
* 记录：记录中间过程遇到的想法
* 完善：排序想法，逐一完成。


如何拥有一个长久稳定优雅的使用体验？

1. Keep Your Decks **Simple**
1. First **Understand**, Then Memorize
1. Lay the **Foundations** First
1. Follow the **Minimum** Information Principle
1. **Cloze** Deletions Are Your Best Friend
1. Use **Images**, Photos, & Figures
1. Schedule a **block** of time for Anki (testing...)

## What?

> Anki is a free and open-source spaced repetition flashcard program. "Anki" (暗記) is the Japanese word for "memorization". [[wiki](https://www.wikiwand.com/en/Anki_(software))]


Anki can be summed up with two bullets:

- **Questions & Answers**: Anki presents you with a question -- be it a fill-in-the-blank，a definition, or a standard quesiton-marked sentense —— and your job is to **recall** the correct answer.
- **Scheduling**: Based on how **difficult** or easy it was to recall the answer to the question, Anki determines the best amount of **time** to wait before asking you the same question again, thereby strengthening the **memory** at just the right moment. 

### Terms

* **Simple**: 与Github笔记相映射。 e.g. [cornerstone](https://i.imgur.com/ZHjgheG.png)
* **Understand**: 在进入Anki前，一个知识点的旅程是：point -> review -> github -> anki。通过流程来保证理解，避免加入未经理解的卡片过多，导致复习时间多长而奔溃。
* **Foundations**: 先地图，再有细节。 e.g. [OS](https://i.imgur.com/xYRomf6.png)
* **记住**：构建`{key: val}`知识库，实现`O(1)`时间的读取知识。
* **Review**: 复习现有的Anki card，遇到疑惑记录(截图？)在册，避免中断。一个原则：小于半分钟的处理，可以立刻执行。
* **Add**: 将记录的疑惑处理，或者放入第二天的review中处理，避免影响之后的安排。
* **block of time**: 为Anki安排一个整块时间，而非分散的时间。Schedule blocks of time for different modes of thinking suggested by <Your brain at work>. To recall information, meaning to bring a memory from the past back to mind, you bring an audience member up on the stage. Otherwise, it is retiring if you keep switch recalling from other modes of thinkging.(I guess)
* **记录**：截屏给review环节做，或者很重要。在workflowy中记录下来，以git commit的要求记录。保证Anki卡片 - github - wiki 三位一体。
	* e.g. 卡片命名：note-name, section name, detail. e.g. Prefrontal Cortex, What? Analogy of 5 functions 
	* e.g. deck-name 为wiki中的话题名。 e.g. [data-type](https://www.wikiwand.com/en/Data_type#/External_links)
* **排序**：系统优化，大于知识细节更新。 e.g. 更新知识的feild，大于定义一个新知识


## FAQs

#### Q：What's MAKE(Minimal Actionable Knowledge and Experience)?

A: Here are some: 

* [The Ultimate Guide to Anki](https://aliabdaal.com/learn-anything-with-flashcards-the-ultimate-guide-to-anki/)
* [Anki Manual](https://docs.ankiweb.net/#/)
* [Chasing 10X: How Anki Saved My Software Career](https://senrigan.io/blog/chasing-10x-leveraging-a-poor-memory-in-software-engineering/)
* [13 Steps to Better ANKI Flashcards | Part 1/2](https://www.youtube.com/watch?v=AbvaITy3oeQ)
* [Strategies, Tips, and Tricks for Anki](https://senrigan.io/blog/everything-i-know-strategies-tips-and-tricks-for-spaced-repetition-anki/)

#### Q: 为什么你会弃疗？

A：一个字：贪。

* 贪方便，使用别人的Shared deck，没有理解就食用，导致消化不良。
* 贪量多，什么都往Anki里放，导致有时候不知道为什么需要知道，导致系统崩溃。
* 贪速度，一张卡片放太多东西，导致复习时间太长，导致复习崩溃。

所以，首先要meaningful，其次connected，最后要small。付诸流程就是，从wiki到github到anki。


#### Q: 如何排序你的「记录」？

A: 通过动词，以下为任务优先级排序：

1. **Optimize**：优化workflow
1. **Map**：增加一个领域地图
1. **Standardize**：标准已有的笔记
1. **Define**：定义一个新的知识
1. **Update**：对已有知识某个部分更新

优先处理「Optimize」和「Map」，有时间再完成后面。

#### Q: Anki card的最低要求是什么？ 

A: 如果说Anki是以{key: val}存储，那么一切卡片的key都有一个对应的公开数据库：

如 wikiwand, yelp, goodread, douban，python-libaray ...

这样一切知识，都有序对应到自己的知识库，于是几乎一切外界信息都可以在我的ditgal garden中找到它的土壤。


#### Q: Anki vs Supermemo?

A: [Battle of the Spaced Repetition Heavyweights: Anki vs. Supermemo Part II](https://unrelatedwaffle.medium.com/battle-of-the-spaced-repetition-heavyweights-anki-vs-supermemo-part-ii-10ef2cd0379d)

#### Q: How much studying is good for you?

A: ?

source: [reddit.com](https://www.reddit.com/r/Anki/comments/le6baz/how_much_studying_is_good_for_you)


#### Q: How do decide which knowledge you would put it into Anki?

A: According to priority algorithm & Importance of knowledge. In short, the knowledge with lower layer is more important. 

<img src="https://i.imgur.com/sIpmot1.png" alt="world knowledge" width=42%">


