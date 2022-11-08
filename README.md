# Apple Music Clone

The goal of this project was to make a music player that was as comparable to Apple Music as possible. I did not want to duplicate the whole application.

The audio files used in this project are the property of *Benjamin Tissot* and were obtained from https://www.bensound.com/


## Built with

  * HTML 
  * CSS
  * Javascript
  * React

Libraries:

  * [React Icons](https://react-icons.github.io/react-icons/)
  * [React Router](https://reactrouter.com/en/main)
  * [React Swiper](https://swiperjs.com/react)
  * [React H5 Audio Player](https://github.com/lhz516/react-h5-audio-player#readme)

## Demo

https://user-images.githubusercontent.com/44822821/200437612-10b6cb13-a33c-4a94-a1d7-2ca01dc29745.mp4


## How does this work?

### Page layout:

![main](https://user-images.githubusercontent.com/44822821/200437016-6d791206-0fd9-4661-9b52-012e04151d7e.png)


### Type of Swipers

  * Swiper1x2.js
  * Swiper1x5.js
  * Swiper2x6.js
  * Swiper1x5small.js

  Each of these swipers represent a playlist. 
  
  Each element found within the swiper represent a song.

  The content of MainFeed is mainly represented by the swipers mentioned before.

  "LeftMenu.js", "MusicPlayer.js" & "Footer.js" do no change when going to another page. 


## Data flow:

![dataflow](https://user-images.githubusercontent.com/44822821/200438042-05109b72-45fe-4690-a654-3596a6a7fbb8.png)


 *on page load MainFeed sends an empty object to "MusicPlayer.js"* 

"data.js" contains and sends all the playlists to MainFeed (green arrows). These playlits are used to populate each Swiper.

When the play button of a song is pressed a function sends the values of {playlist,index} corresponding to the song to "MusicPlayer.js" (blue arrows) and plays the specified song. 

## Swipers element definition:

### Swiper1x2  

```
let swiper1x2Element = objectsInfo.map( (object, index) => {
    return(
      <SwiperSlide key={index}>
        <div className= 'Swiper1x2Element'>
        <div>
            <p>{object.status}</p>
            <p>{object.name} - {object.artist}</p>
            </div>
          <div className= 'imageContainer'>
          <img className= 'image'src={object.imageLink}
            alt='Random cover'></img>
            <div className= 'buttons'>
              <span className= 'playIconSwiper1x2' onClick={() => {handleClick(objectsInfo, index)}} >
               <BsFillPlayCircleFill size="30px"/>
              </span>
            </div>
            <div className='overlayText'>
            <p>{object.description}</p>
            </div>
            </div>
         </div>
         </SwiperSlide>)
    })

```

### Swiper1x6  

```

let Swiper1x6Element = objectsInfo.map( (object, index) => {
    return(
      <SwiperSlide key={index}>
         <div className= 'Swiper1x6Element'>
           <div className= 'imageContainer'>
             <img className= 'image'src={object.imageLink}
                   alt='Random cover'></img>
              <div className= 'buttons'>
              <span className= 'playIcon' onClick={() => {handleClick(objectsInfo, index)}}>
               <BsFillPlayCircleFill size="30px"/>
              </span>
              <span className= 'moreIcon' onClick={() => { 
                    navigator.clipboard.writeText(`${object.name} & ${object.artist}`)
                    alert(`${object.name} - ${object.artist}  was copied to clipboard`)
                    }}>
              <CgMoreO size="30px"/>
              </span>
              </div>
            </div>
           <div>
           <p>{object.name}</p>
           <p>{object.artist}</p>
           </div>
       </div>
       </SwiperSlide>)
  })

```

### Swiper2x6  

```

function generateElement(i){
    return(
    <div className= 'Swiper2x6Element'>
          <div className= 'imageContainer'>
          <img className= 'image'src={objectsInfo[i].imageLink}
            alt='Random cover'></img>
            <div className= 'buttons'>
              <span className= 'playIcon' onClick={() => {handleClick(objectsInfo, i)}}>
              <BsFillPlayCircleFill size="30px"/>
              </span>
              <span className= 'moreIcon' onClick={() => { 
                      navigator.clipboard.writeText(`${objectsInfo[i].name} & ${objectsInfo[i].artist}`)
                      alert(`${objectsInfo[i].name} - ${objectsInfo[i].artist}  was copied to clipboard`)
                      }}>
                <CgMoreO size="30px"/>
              </span>
            </div>
            </div>
            <div>
            <p>{objectsInfo[i].name}</p>
            <p>{objectsInfo[i].artist}</p>
            </div>
        </div>)
  }

  for(let i=0; i<halfLengthofObject; i++){
    let j=halfLengthofObject +i
    Swiper2x6Element[i] =
        <SwiperSlide key={i}>
          {generateElement(i)}
          {generateElement(j)}
        </SwiperSlide>
  }

```

### Swiper1x5small 

```
let Swiper1x6ElementSmall = objectsInfo.map( (object, index) => {
    return(
      <SwiperSlide key={index}>
      <div className= 'Swiper1x5smallElement'>
        <div className= 'imageContainer'>
        <img className= 'image'src={object.imageLink}
          alt='Random cover'></img>
          <div className= 'buttons'>
            <span className= 'playIcon' onClick={() => {handleClick(objectsInfo, index)}}>
             <BsFillPlayCircleFill size="30px"/>
            </span>
            <span className= 'moreIcon' onClick={() => { 
                    navigator.clipboard.writeText(`${object.name} & ${object.artist}`)
                    alert(`${object.name} - ${object.artist}  was copied to clipboard`)
                    }}>
              <CgMoreO size="30px"/>
            </span>
          </div>
          </div>
          <div>
          <p>{object.name}</p>
          </div>
       </div>
       </SwiperSlide>
    )})

```
