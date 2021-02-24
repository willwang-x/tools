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

### [document](https://ffmpeg.org/ffmpeg.html)

* 1 Synopsis
* 2 Description
* 3 Detailed description
	* 3.1 Filtering
	* 3.1.1 Simple filtergraphs
	* 3.1.2 Complex filtergraphs
	* 3.2 Stream copy
* 4 Stream selection
	* 4.1 Description
	* 4.1.1 Automatic stream selection
	* 4.1.2 Manual stream selection
	* 4.1.3 Complex filtergraphs
	* 4.1.4 Stream handling
	* 4.2 Examples
* 5 Options
	* 5.1 Stream specifiers
	* 5.2 Generic options
	* 5.3 AVOptions
	* 5.4 **Main options**
	* 5.5 Video Options
	* 5.6 Advanced Video options
	* 5.7 Audio Options
	* 5.8 Advanced Audio options
	* 5.9 Subtitle options
	* 5.10 Advanced Subtitle options
	* 5.11 Advanced options
	* 5.12 Preset files
	* 5.12.1 ffpreset files
	* 5.12.2 avpreset files
* 6 Examples
	* 6.1 Video and Audio grabbing
	* 6.2 X11 grabbing
	* 6.3 Video and Audio file format conversion
* 7 See Also
* 8 Authors

#### 5.4 Main options

##### -ss position (input/output)

* When used as an **input option** (before -i), seeks in this input file to **position**. Note that in most formats it is not possible to seek exactly, so ffmpeg will seek to the closest seek point before position. When transcoding and -accurate_seek is enabled (the default), this extra segment between the seek point and position will be decoded and discarded. When doing stream copy or when -noaccurate_seek is used, it will be preserved.
* When used as an output option (before an output url), decodes but discards input until the timestamps reach position.
* position **must be a time duration specification**, see (ffmpeg-utils)the Time duration section in the ffmpeg-utils(1) manual.

### [FFmpeg Utilities Documentation](https://ffmpeg.org/ffmpeg-utils.html#time-duration-syntax)

* 1 Description
* 2 Syntax
	* 2.1 Quoting and escaping
	* 2.1.1 Examples
	* 2.2 Date
	* 2.3 Time duration
	* 2.3.1 Examples
	* 2.4 Video size
	* 2.5 Video rate
	* 2.6 Ratio
	* 2.7 Color
	* 2.8 Channel Layout
* 3 Expression Evaluation
* 4 See Also
* 5 Authors

#### 2.3 [Time duration](https://ffmpeg.org/ffmpeg-utils.html#Time-duration)

There are two accepted syntaxes for expressing time duration.

```
[-][HH:]MM:SS[.m...]
```

HH expresses the number of hours, MM the number of minutes for a maximum of 2 digits, and SS the number of seconds for a maximum of 2 digits. The m at the end expresses decimal value for SS.

or

```
[-]S+[.m...][s|ms|us]
```

S expresses the number of seconds, with the optional decimal part m. The optional literal suffixes ‘s’, ‘ms’ or ‘us’ indicate to interpret the value as seconds, milliseconds or microseconds, respectively.

In both expressions, the optional ‘-’ indicates negative duration.

##### 2.3.1 Examples

The following examples are all valid time duration:

* ‘55’: 55 seconds: ‘0.2’:0.2 seconds
* ‘200ms’: 200 milliseconds, that’s 0.2s
* ‘200000us’: 200000 microseconds, that’s 0.2s
* **‘12:03:45’**: 12 hours, 03 minutes and 45 seconds
* ‘23.189’: 23.189 seconds

### [FFmpeg Filters Documentation](http://ffmpeg.org/ffmpeg-filters.html#subtitles)

#### [11.203 subtitles](http://ffmpeg.org/ffmpeg-filters.html#subtitles)

Draw subtitles on top of input video using the libass library.

To enable compilation of this filter you need to configure FFmpeg with --enable-libass. This filter also requires a build with libavcodec and libavformat to convert the passed subtitles file to ASS (Advanced Substation Alpha) subtitles format.

To make the subtitles stream from sub.srt appear in 80% transparent blue DejaVu Serif, use:


```
subtitles=sub.srt:force_style='Fontname=DejaVu Serif,PrimaryColour=&HCCFF0000'
```


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

#### Q: How to Add Font size in subtitles in ffmpeg video filter?

[A](https://stackoverflow.com/questions/21363334/how-to-add-font-size-in-subtitles-in-ffmpeg-video-filter):

``` bash
ffmpeg -i video.mp4 -vf "subtitles=subs.srt:force_style='Fontsize=24,PrimaryColour=&H0000ff&'" -c:a copy output.mp4
```

#### Q: How to convert pic from png to jpg?

A:

```
ffmpeg -i 1.png 1.jpg
```

## More 

* [Read and Write Video Frames in Python Using FFMPEG](http://zulko.github.io/blog/2013/09/27/read-and-write-video-frames-in-python-using-ffmpeg/)
* [Python bindings for FFmpeg - with complex filtering support](https://github.com/kkroening/ffmpeg-python)
* [CREATING SCREENSHOTS WITH FFMPEG IS SLOW?](https://www.nrg-media.de/2010/11/creating-screenshots-with-ffmpeg-is-slow/)