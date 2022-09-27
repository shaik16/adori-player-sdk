## greets to

> https://github.com/shaik16
>
> If you’re new to TypeScript and React, checkout [this handy cheatsheet](https://github.com/sw-yx/react-typescript-cheatsheet/)

## Installation

You can install Adori Player with [NPM](https://npmjs.com),
[Yarn](https://yarnpkg.com), or a good old' `<script>` via
[unpkg.com](https://unpkg.com).

```sh
npm install adori-player-sdk
```

or

```sh
yarn add adori-player-sdk
```

This package is compatible with All the SPA's which uses node 12+ and works with Javascript DOM.

### Watch Live [Demo here](https://codesandbox.io/s/hungry-austin-o5ojlj?file=/src/App.vue)

### How to use

# adori-web-player

## Embedding on other web sites

create a div tag in your html,jsx or vue template with and id

## Example

### Step 1

```html
<div id="player"></div>
```

in the script file,react functions or vue methods or lifecycle hooks

### Step 2

```Javascript
new Player('player')
/** Note: you need to pass the id string as a parameter which
is declared above */
/** Above code will create player but will not play any episode until
 * you pass episodeUid Option.
 * for more info check options table
 */
```

### Step 3

```Javascript
new Player('player',{
	episodeUid:'Iys4HBX4ZbYPoFGJ',
	onload:callBack
})
/** Note you also have onload callBack which you can pass
 * You have to pass episodeUid or audioUrl in order to play any audio
 * check options table for more functionality
 */
```

# Supported Option In player class

| Options     | Description                                                                                                 | DefaultValue | Accepted Value | Example                                                                                                                                                |
| ----------- | ----------------------------------------------------------------------------------------------------------- | ------------ | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| width       | Specify width of player                                                                                     | '320px'      | String         | `new Player('player',{width:'300px'})`                                                                                                                 |
| height      | Specify height of player                                                                                    | '560px'      | String         | `new Player('player',{height:'700px'})`                                                                                                                |
| episodeUid  | You need to pass the episode uid that you get from adori                                                    | NA           | String         | `new Player('player',{episodeUid:'Iys4HBX4ZbYPoFGJ'})`                                                                                                 |
| audio       | If you want to play an audio from an external audio source then use audio query param                       | NA           | String URL     | `new Player('player',{audioUrl:'url'})`                                                                                                                |
| autoplay    | This parameter specifies whether the initial Episode will automatically start to play when the player loads | 0            | 0 or 1         | `new Player('player',{autoplay:1})` <br/> <br/> Note: this will only works on some browsers or you need to use mute param to mute episode and autoplay |
| controls    | This parameter indicates whether the web player controls are displayed                                      | 1            | 0 or 1         | `new Player('player',{controls:1})`                                                                                                                    |
| seekBar     | This parameter indicates whether the audio seekBar is displayed when controls are disabled                  | 0            | 0 or 1         | `new Player('player',{seekBar:1})` <br/> <br/> Note: this param only works if the controls are disabled                                                |
| miniSeekBar | This parameter indicates whether the audio seekBar should be displayed when miniPlayer is active            | 0            | 0 or 1         | `new Player('player',{miniSeekBar:1})`                                                                                                                 |
| titleBar    | This parameter indicates whether the title bar should be displayed when miniPlayer is active                | 1            | 0 or 1         | `new Player('player',{titleBar:1})`                                                                                                                    |
