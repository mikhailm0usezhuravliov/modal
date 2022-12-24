import { Component, Input } from '@angular/core';
import { ModalService } from '../../modal-service.service';
import { Modal } from '../../models/modal.model';

@Component({
  template: `
    <div class="modal">
      <div class="modal-header">
        <button type="button" class="close" (click)="cancel()">&times;</button>
        <h3>{{ title }}</h3>
      </div>
      <div class="modal-body">
        <p>{{ message }}</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" (click)="cancel()">Cancel</button>
        <button type="button" class="btn btn-primary" (click)="save()">Save</button>
      </div>
    </div>
  `
})
export class ModalComponent extends Modal {

  title: string;
  message: string;

  constructor(private modalService: ModalService) {
    super();
  }
  ngOnInit() {
    console.log(this.data);
    this.title = this.data.title;
    this.message = this.data.message;
  }

  save(): void {
    const modalRef = this.modalService.open(ModalComponent, { title: 'My dynamic title', message: 'My dynamic message' });
  }

  cancel(): void {
    this.dismiss('canceling');
  }

}
