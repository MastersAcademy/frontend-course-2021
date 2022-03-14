import { Component, OnDestroy, OnInit } from '@angular/core';
import {AuthService, ToDoService} from '../../services';
import { IToDoList } from '../../models/toDoList.model';
import {finalize, Subscription} from 'rxjs';
import {COLOR_STYLE_OK} from '../../constant';


@Component({
    selector: 'app-to-do-list',
    templateUrl: './to-do-list.component.html',
    styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit, OnDestroy{

  private subscription: Subscription = new Subscription();
  toDoList: IToDoList [] = [];
  isStatusTask = false;
  colorStyleOk = COLOR_STYLE_OK;
  isLoader = true;

  constructor(private toDoService: ToDoService,
                private authService: AuthService) { }

  ngOnInit() {
      this.updateData();
  }

  ngOnDestroy() {
      this.subscription.unsubscribe();
  }


  public updateData(): void {
      this.subscription.add(this.toDoService.getList()
          .pipe( finalize ( () => {
              this.isLoader = false;
          }))
          .subscribe( (data: IToDoList[]) => {
              this.toDoList = data;
          })
      )
  }

  public deleteTask(id: string): void {
      this.subscription.add(this.toDoService.deleteTask(id).subscribe(() => {
          this.updateData();
      }))

  }

  public changeStatusTask(id: string, status: boolean): void {
      this.isStatusTask= !status;
      this.subscription.add(this.toDoService.changeStatusTask(id, this.isStatusTask)
          .subscribe( () => {
              this.updateData();
          }))
  }

  public singOut(): void {
      this.authService.singOut();
  }
}
