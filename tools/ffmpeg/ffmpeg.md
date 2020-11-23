<h1 align="center">
<br>
	<a href="https://www.wikiwand.com/en/FFmpeg">
  <img src="https://i.imgur.com/UAUzzLP.png" alt="ffmpeg" width=42%">
  </a>
  <br><br>
ffmpeg
  <br><br>
</h1>


> A complete, cross-platform solution to record, convert and stream audio and video. [[ffmpeg.org](https://ffmpeg.org/)]


## Why 

* automate what's about video 

## How 

### MAKE 

* [document](https://ffmpeg.org/ffmpeg.html): official documentation
* [cheatsheet](https://cheatography.com/thetartankilt/cheat-sheets/ffmpeg/)


## What 

FFmpeg is a free and open-source software project consisting of a large suite of libraries and programs for **handling video, audio, and other multimedia files and streams**. At its core is the FFmpeg program itself, designed for command-line-based processing of video and audio files. It is widely used for format transcoding, basic editing (trimming and concatenation), video scaling, video post-production effects and standards compliance (SMPTE, ITU).

## FQAs


#### Q: How to take **screenshot** from **multiple** videos?

[A](https://www.junian.net/tech/ffmpeg-video-screenshot/): find . -name "*.mp4" -exec ffmpeg -i {} -ss 00:00:01 -vframes 1 {}_screenshot.jpg;


#### Q: How to extract one **frame** of a video every **N** seconds to an image? 

A:  [A](https://superuser.com/questions/135117/how-to-extract-one-frame-of-a-video-every-n-seconds-to-an-image/729351): ffmpeg -i input.mov -r 0.25 output_%04d.png

#### Q: How to **reduce** a video's size with ffmpeg?

* [A](https://unix.stackexchange.com/questions/28803/how-can-i-reduce-a-videos-size-with-ffmpeg):  ffmpeg -i input.mp4 -vcodec libx265 -crf 40 output.mp4
* **[crf](https://trac.ffmpeg.org/wiki/Encode/H.265)**: Constant Rate Factor: Use this mode if you want to retain good visual quality and don't care about the exact bitrate or filesize of the encoded file.
* Test:
* input.mp4: 9.5MB <br><img src="https://i.imgur.com/Gsw4oGi.jpg" alt="input" width="150"/>
* **28**: 6.1MB ~= 2/3input.mp4: 9.5MB <br><img src="https://i.imgur.com/tR7rRs0.jpeg" alt="28" width="150"/>
* **34**: 4.3MB ~= 1/2 <br><img src="https://i.imgur.com/4EX1eTY.jpg" alt="34" width="150"/>
* **40**: 3.4MB ~= 1/3 <br><img src="https://i.imgur.com/UAlsjlG.jpeg" alt="40" width="150"/>
* **51**: 2.8MB ~= 1/4 <br><img src="https://i.imgur.com/PRZYj2V.jpg" alt="51" width="150"/>

#### Q: How to burn subtitles into video?

A: ffmpeg -i video.avi -vf subtitles=subtitle.srt out.avi 

#### Q: How to **speed** sreenshots?

[A](https://www.nrg-media.de/2010/11/creating-screenshots-with-ffmpeg-is-slow/): Put the **-ss** parameter in front of the input file and FFmpeg skips to the selected frame almost instantly.

Test：

* extract one frame of video every N seconds
* extract one frame of video with subtitles every N seconds
* extract one frame of video at given time (list of timestamp)

#### Q: Video to Gif?

[A](https://engineering.giphy.com/how-to-make-gifs-with-ffmpeg/):  
 
``` bash
ffmpeg -ss 61.0 -t 2.5 -i input.mp4 -f gif output.gif
ffmpeg -i input.mp4 -f gif output.gif
ffmpeg -i input.mp4 -filter_complex "[0:v] fps=12,scale=480:-1,split [a][b];[a] palettegen [p];[b][p] paletteuse" output2.gif
ffmpeg -i input.mp4 -filter_complex "[0:v] fps=12,scale=w=480:h=-1,split [a][b];[a] palettegen=stats_mode=single [p];[b][p] paletteuse=new=1" output3.gif
ffmpeg -ss 0.0 -t 2.0 -i input.mp4 -filter_complex "[0:v] fps=8,scale=w=480:h=-1,split [a][b];[a] palettegen=stats_mode=single [p];[b][p] paletteuse=new=1" output4.gif

```


## More 

* [Read and Write Video Frames in Python Using FFMPEG](http://zulko.github.io/blog/2013/09/27/read-and-write-video-frames-in-python-using-ffmpeg/)
* [Python bindings for FFmpeg - with complex filtering support](https://github.com/kkroening/ffmpeg-python)
* [CREATING SCREENSHOTS WITH FFMPEG IS SLOW?](https://www.nrg-media.de/2010/11/creating-screenshots-with-ffmpeg-is-slow/)