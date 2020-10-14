# ffmpeg

> A complete, cross-platform solution to record, convert and stream audio and video.


## Why 

* automate what's about video 

## How 

### MAKE 

* [document](https://ffmpeg.org/ffmpeg.html): official documentation

## What 

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
	* **5.4 Main options**
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

## Use case 

* [Take Screenshot from Video with FFmpeg](https://www.junian.net/tech/ffmpeg-video-screenshot/)
* How to extract one frame of a video every N seconds to an image? 
	* [A](https://superuser.com/questions/135117/how-to-extract-one-frame-of-a-video-every-n-seconds-to-an-image/729351): ffmpeg -i input.mov -r 0.25 output_%04d.png

Test：

* extract one frame of video every N seconds
* extract one frame of video with subtitles every N seconds
* extract one frame of video at given time (list of timestamp)

## More 

* [FFmpeg的使用](https://www.jianshu.com/p/7ed3be01228b)
* [FFmpeg official website](https://www.ffmpeg.org/)
* [Read and Write Video Frames in Python Using FFMPEG](http://zulko.github.io/blog/2013/09/27/read-and-write-video-frames-in-python-using-ffmpeg/)
* [Python bindings for FFmpeg - with complex filtering support](https://github.com/kkroening/ffmpeg-python)