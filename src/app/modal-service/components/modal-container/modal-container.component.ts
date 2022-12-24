import { Component, ViewChild, ViewContainerRef, Type, ComponentRef } from '@angular/core';

import { Modal } from '../../models/modal.model';


@Component({
  template: `
    <div class="modal-backdrop fade in"></div>
    <ng-template #modalContainer></ng-template>
  `
})
export class ModalContainerComponent {

  @ViewChild('modalContainer', { read: ViewContainerRef }) private modalContainer: ViewContainerRef;

  createModal<T extends Modal>(component: Type<T>): ComponentRef<T> {
    this.modalContainer.clear();
    return this.modalContainer.createComponent(component);
  }

}
