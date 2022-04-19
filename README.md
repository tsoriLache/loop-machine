# Loop Machine

### Build a Looper - front project 

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png" height="50px" width="50px"><img src="https://www.obg.eu.com/img/technologies/react.png" height="50px" width="50px">

---

### Technologies in use - 

- **[React](https://reactjs.org/)**
- **[TypeScript](https://www.typescriptlang.org/)**

#### AWS Services - ☁

 **S3 - In order to serve the front as static files**

#### Packages -

 **[react-icons](https://react-icons.github.io/react-icons) - For Nice icons**

---

## My app -

### Features - 

- **control buttons : play/pause , stop , loop**
- **Slide cursor to move the playback to the dropped position**
- **Choosing what sounds you want with the mute/unmute buttons**
- **Mobile first design!**

### future 

- **Automatic play when using th slide cursor**
- **Recording option**
- **Option to add tracks option**
- **Github workflow - deploy to s3 on every marge to main**


---

### [Visit my website!](http://www.looper.s3-website-us-east-1.amazonaws.com/) 

#### Maybe it's blocked so it doesn't cost me any money 

- **The Front was served in S3 bucket as a static file.**


---

## Screenshots 📸 -

##  Front interfaces:

![image](https://user-images.githubusercontent.com/89573774/163898369-0a1cd293-30ff-4902-b986-9b90bc59089e.png)



---

## Assignment

1. [x] Create a page with 9 rows, each row is a channel which should represent
an audio loop. (use unique color for each row)
2. [x] For each channel add a mute button (toggle on/off)
3. [x] Add section to the bottom of the page with the following buttons :
    1. [x] Play button - should start playing all channels simultaneously (which
isn’t muted)
    2. [x] Stop button - should stop all playing channels and go back to start.
    3. [x]Loop button (toggle on/off) - when active, each time the loop ends
you should immediately go back to start and play again (loop).

*make sure to detect toggle changes while playing
* don’t use native audio elements for UI (you can use it behind).
* make sure nothing can break the sync between all channels
* avoid any delay each time a loop is finished and starts over again.

4. [x] Add cursor on top of all channels (1px width from top to bottom) to show
your current playing position in real time (while playing).

Bonus :
Add drag and drop abilities to the cursor ! (moving the playback to the
dropped position)

General guidelines:
- All the samples have the same length and BPM.
- Use any framework/library you’d like.
- Add clear comments to the code where needed.
- Deploy the project and supply the url.
Good luck!
