import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {

  // Passing data from parent component
  @Input()rating!: number;
  // Passing data from Child(Nested) component to parent
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  cropWidth: number = 75;

  /**
   * To calculate the star count with a number value
   * we'll to recalculated anytime that the container
   * changes the rating number.
   * 
   * * OnChange
   */

  ngOnChanges(): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    this.cropWidth = this.rating*75/5;
    /**
     * For the rating is 4 , 4 times 75 divided by 5 is 60px
     */
  }

  onClick(): void {
    // We emit the Output variable called 'notify' as an event when user clicks on the html element
    this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
  }

}
