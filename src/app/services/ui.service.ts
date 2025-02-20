import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private showAddTask : boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  toggleAddTask() : void{
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask);
  }

  /**
   * The asObservable() method is used to expose an Observable from a Subject, while preventing external code from calling next(), error(), or complete() on the subject.
   * Explanation:
    - In your code, subject is an instance of Subject<any>, which means it can emit values and also
       be subscribed to.
    - The toggleAddTask() method toggles the showAddTask boolean and emits the updated value using 
      subject.next(this.showAddTask).
    - The onToggle() method returns this.subject.asObservable(), which means that external components can
      subscribe to it but cannot directly modify the Subject (i.e., they cannot call .next() on it).
    - Why use asObservable()?
      *Encapsulation: It ensures that only this service can emit values (next()), and other parts of the 
      application can only listen for updates.
      *Prevents Unintended Changes: If you expose subject directly, any component could call .next() and emit
      new values, which might lead to unpredictable behavior.
      * Best Practice in RxJS and Angular Services: Using asObservable() maintains a clear distinction
       between producers (who emit values) and consumers (who subscribe to values).
   * @returns{any} Observable
   */
  onToggle() : Observable<any>{
    return this.subject.asObservable();
  }
}
