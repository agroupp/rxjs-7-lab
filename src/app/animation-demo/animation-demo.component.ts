import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Inject } from '@angular/core';
import { animationFrames, fromEvent, Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

const AUDIO_API = 'https://sapi.audioburst.com/v2/topstories/category?device=web&userId=9ca69332-1fe5-43ad-9b5a-f74358e69e46&appKey=ccbbc43537384faf9fec145c863a896a&category=news';

interface Burst {
  contentURLs: { audioURL: string; };
}

interface Playlist {
  bursts: Burst[];
}

@Component({
  selector: 'app-animation-demo',
  templateUrl: './animation-demo.component.html',
  styleUrls: ['./animation-demo.component.scss']
})
export class AnimationDemoComponent implements OnInit {
  private readonly audioEl = this.document.createElement('audio');
  private isStopedSubj = new Subject<void>();

  readonly progressStd$ = fromEvent(this.audioEl, 'timeupdate').pipe(
    map(() => this.duration ? this.audioEl.currentTime / this.duration : 0)
  );

  progressAdv$?: Observable<number>;

  isPlaying = false;
  isReady = false;
  duration = 0;

  constructor(@Inject(DOCUMENT) private readonly document: Document, private readonly http: HttpClient) {
    fromEvent(this.audioEl, 'canplay').subscribe(() => this.isReady = true);
    fromEvent(this.audioEl, 'playing').subscribe(() => {
      this.isPlaying = true;
      this.progressAdv$ = this.createAnimFrames();
    });
    fromEvent(this.audioEl, 'pause').subscribe(() => {
      this.isPlaying = false;
      this.isStopedSubj.next();
    });
    fromEvent(this.audioEl, 'durationchange').subscribe(() => this.duration = this.audioEl.duration);
  }

  ngOnInit(): void {
    this.getAudioData().subscribe(audioSrc => this.setSrc(audioSrc));
  }

  getAudioData(): Observable<string> {
    return this.http.get<Playlist>(AUDIO_API).pipe(
      map(res => {
        if (!res?.bursts?.length) {
          throw new Error('Error fetching audio');
        }
        return res.bursts[0].contentURLs.audioURL;
      })
    );
  }

  setSrc(src: string): void {
    this.isPlaying = false;
    this.audioEl.src = src;
    this.isReady = true;
  }

  async play(): Promise<void> {
    await this.audioEl.play();
  }

  pause(): void {
    this.audioEl.pause();
  }

  private createAnimFrames(): Observable<number> {
    return animationFrames().pipe(
      map(() => this.duration ? this.audioEl.currentTime / this.duration : 0),
      takeUntil(this.isStopedSubj)
    );
  }
}
