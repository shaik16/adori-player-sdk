export interface Options {
  height: string;
  width: string;
  episodeUid: string;
}

export class Player {
  constructor(
    private targetElementId: string,
    private options: Options,
    public onload?: () => void
  ) {
    const player: HTMLElement = document.getElementById(this.targetElementId)!;
    const iframe = document.createElement('iframe');
    iframe.setAttribute(
      'src',
      `https://webplayer.dev.adorilabs.com/${this.options.episodeUid}`
    );
    iframe.setAttribute('width', this.options.width);
    iframe.setAttribute('height', this.options.height);
    this.onload && (iframe.onload = this.onload);
    player.appendChild(iframe);
  }
}
