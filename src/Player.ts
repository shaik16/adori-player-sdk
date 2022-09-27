export interface Options {
  height?: string;
  width?: string;
  episodeUid?: string;
  audioUrl?: string;
  autoPlay?: 0 | 1;
  controls?: 0 | 1;
  seekBar?: 0 | 1;
  miniSeekBar?: 0 | 1;
  titleBar?: 0 | 1;
}

export class Player {
  constructor(
    private targetElementId: string,
    private options: Options = {
      height: '560',
      width: '320',
      autoPlay: 0,
      controls: 1,
      seekBar: 1,
      miniSeekBar: 1,
      titleBar: 1,
    },
    public onload?: () => void
  ) {
    const player: HTMLElement = document.getElementById(this.targetElementId)!;
    const iframe = document.createElement('iframe');
    const {
      height = '560',
      width = '320',
      autoPlay = 0,
      audioUrl,
      episodeUid,
      controls = 1,
      seekBar = 1,
      miniSeekBar = 1,
      titleBar = 1,
    }: Options = this.options;
    const webplayerUrl = new URL(
      episodeUid || '/',
      'https://webplayer.adorilabs.com'
    );

    audioUrl && webplayerUrl.searchParams.append('url', audioUrl);
    webplayerUrl.searchParams.append('autoPlay', `${autoPlay}`);
    webplayerUrl.searchParams.append('controls', `${controls}`);
    webplayerUrl.searchParams.append('seekBar', `${seekBar}`);
    webplayerUrl.searchParams.append('miniSeekBar', `${miniSeekBar}`);
    webplayerUrl.searchParams.append('titleBar', `${titleBar}`);

    iframe.setAttribute('src', webplayerUrl.href);
    iframe.setAttribute('width', width);
    iframe.setAttribute('height', height);
    this.onload && (iframe.onload = this.onload);
    player.appendChild(iframe);
  }
}
