import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './compose-message.component.html'
})
export class ComposeMessageComponent {
  details: string;
  sending = false;

  constructor (private router: Router) {}

  send(message: string) {
    this.sending = true;

    setTimeout(() => {
      this.sending = false;
      this.closePopup();
    }, 1000)
  }

  cancel() {
    this.closePopup();
  }

  closePopup() {
    this.router.navigate([{outlets: { popup: null }}]);
  }
}
