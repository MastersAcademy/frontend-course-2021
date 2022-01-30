import {Component, OnDestroy} from '@angular/core';
import {ToDoService} from '../../services';
import {ToDoListComponent} from '../to-do-list/to-do-list.component';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-add-to-do-item',
    templateUrl: './add-to-do-item.component.html',
    styleUrls: ['./add-to-do-item.component.css']
})
export class AddToDoItemComponent implements OnDestroy {

  public toDoText  = '';
  private subscription: Subscription = new Subscription();

  constructor(private toDoService: ToDoService, private toDoListComponent: ToDoListComponent) {
  }

  ngOnDestroy() {
      this.subscription.unsubscribe();
  }


  public addNewTask() {
      if (this.toDoText) {
          this.subscription.add(this.toDoService.addNewTask(this.toDoText).subscribe(() => {
              this.toDoListComponent.updateData();
              this.toDoText = '';
          }))
      }
  }
}
