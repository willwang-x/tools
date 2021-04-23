<h1 align="center">
<br>
	<a href="https://www.wikiwand.com/en/GIF">
  <img src="https://i.imgur.com/26beRzr.gif" alt="intuition or map" width=42%">
  </a>
  <br><br>
GIF
  <br><br>
</h1>

> The **Graphics Interchange Format** (GIF; /dʒɪf/ JIF or /ɡɪf/ GHIF) is a **bitmap image format** that was developed by a team at the online services provider **CompuServe** led by American computer scientist Steve Wilhite on 15 June 1987. [[wiki](https://www.wikiwand.com/en/GIF)]

## Why 

### Advantages & Disadvantages

1. Small File Size
2. Professional Looking Images
3. Convey Messages Better
 
source: [6 Advantages and Disadvantages of Animated Gifs](https://connectusfund.org/6-advantages-and-disadvantages-of-animated-gifs)

### Benefits 

1. GIFs are easy to consume
2. GIFs can tell a story or explain a process
3. GIFs create emotion and show personality
4. To show off a product or an offer
5. To play a video
6. Use GIFs in email marketing
7. Highlight your company's culture

source: [7 Ways Using GIFs Can Amp Up Your Marketing](https://www.vye.agency/blog/marketing-gifs)

## How

* [How to Create an Animated GIF](https://www.wikihow.com/Create-an-Animated-GIF)
* [course](https://www.skillshare.com/classes/Easy-Animation-Make-Fun-Cute-GIFs-For-Your-Instagram/1174228000): Easy Animation: Make Fun, Cute GIFs For Your Instagram


## What 

### Overview

The **Graphics Interchange Format** (GIF; /dʒɪf/ JIF or /ɡɪf/ GHIF) is a **bitmap image format** that was developed by a team at the online services provider **CompuServe** led by American computer scientist Steve Wilhite on 15 June 1987.[1] It has since come into widespread usage on the World Wide Web due to its wide support and portability between applications and operating systems.

The format supports up to 8 bits per pixel for each image, allowing a single image to reference its own palette of up to 256 different colors chosen from the 24-bit RGB color space. It also supports animations and allows a separate palette of up to 256 colors for each frame. These palette limitations make GIF less suitable for reproducing color photographs and other images with color gradients, but well-suited for simpler images such as graphics or logos with solid areas of color. Unlike video, the GIF file format does not support audio.

GIF images are compressed using the Lempel–Ziv–Welch (LZW) lossless data compression technique to reduce the file size without degrading the visual quality. This compression technique was patented in 1985. Controversy over the licensing agreement between the software patent holder, Unisys, and CompuServe in 1994 spurred the development of the Portable Network Graphics (PNG) standard. By 2004 all the relevant patents had expired.


### Others

* History
* Terminology
* Usage
* File format
* Palettes
* Example GIF file
* Compression example
* Interlacing
* Animated GIF
* Metadata
* Unisys and LZW patent enforcement
* Alternatives


## FAQs

#### Q: keywords vs ?

A: 

#### Q: convert clip to GIF?

A: 

* Edit by Apple Photo
* Convert by ffmpeg

```
ffmpeg -i vid.mp4 -f gif output.gif
```

#### Q: How to convert video clip to GIF?

A:

* [BeyondPlayer](https://circleapps.co/): Save **video clip** with lines to Clip Library
* Show Movie Clip in Finder
* Burn subtile and convert it to GIF by [FFmpeg](https://www.wikiwand.com/en/FFmpeg)

``` bash
ffmpeg -i vid.mp4 -vf "subtitles=vid.srt:force_style='Fontsize=24,PrimaryColour=&H0000ff&'" -f gif output.gif
```

#### Q: How to resize GIF?

A:  scale=`160` 


``` bash
ffmpeg -hide_banner -v warning -i test.gif -filter_complex "[0:v] scale=160:-1:flags=lanczos,split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse" logo-160.gif
```

``` bash
ffmpeg -hide_banner -v warning -i test.gif -filter_complex "[0:v] scale=320:-1:flags=lanczos,split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse" logo-320.gif
```

smaller  = 100

``` bash
ffmpeg -hide_banner -v warning -i test.gif -filter_complex "[0:v] scale=100:-1:flags=lanczos,split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse" logo-160.gif
```

* has some issues and need more understanding before using it