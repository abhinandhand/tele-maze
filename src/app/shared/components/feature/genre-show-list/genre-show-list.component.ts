import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Settings } from 'src/app/shared/models/settings.mode';
import { TvShow } from 'src/app/shared/models/tvshow.model';
import { selectSettings } from 'src/app/store/settings/reducer/settings.selector';

@Component({
  selector: 'genre-show-list',
  templateUrl: './genre-show-list.component.html',
  styleUrls: ['./genre-show-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GenreShowListComponent implements AfterViewInit {

  currentScrollPosition: number = 0;
  overallScrollWidth: number = 0;
  listContainerWidth: number = 0;

  @Input() shows!: TvShow[];
  @Input() title!: string;

  @ViewChild('genrelist') genreListElement!: ElementRef<HTMLElement>;

  deviceSetting$: Observable<Settings> = this.store.select(selectSettings);

  constructor(private store: Store, private cd: ChangeDetectorRef) { }

  ngAfterViewInit() {
    this.listContainerWidth += this.genreListElement?.nativeElement.clientWidth;
    this.currentScrollPosition = this.listContainerWidth;
    this.overallScrollWidth = this.genreListElement?.nativeElement.scrollWidth;

    this.cd.detectChanges();
  }

  scrollLeft(){
    if(this.currentScrollPosition > this.listContainerWidth ) {
      this.currentScrollPosition -= this.listContainerWidth ;
      this.genreListElement.nativeElement.scrollLeft -= this.listContainerWidth ;
    }
  }

  scrollRight(){
    if(this.currentScrollPosition < this.overallScrollWidth) {
        this.currentScrollPosition += this.listContainerWidth ;
        this.genreListElement.nativeElement.scrollLeft += this.listContainerWidth;
    }
  }

  trackByTvShowIndex(_index: number, item: TvShow) {
    return item.id;
  }

}
