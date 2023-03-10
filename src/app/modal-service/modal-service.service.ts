import {
  Injectable,
  ApplicationRef,
  ComponentRef,
  Type
} from '@angular/core';

import { ModalContainerComponent } from './components/modal-container/modal-container.component';
import { Modal } from './models/modal.model';
import { ModalRef } from './models/modal-ref.model';

@Injectable({
  providedIn: 'root'
}
)
export class ModalService {

  private modalContainer: HTMLElement;
  // private modalContainerFactory: ComponentFactory<ModalContainerComponent>;

  constructor(
    private appRef: ApplicationRef
  ) {
    //this.setupModalContainerFactory();
  }

  open<T extends Modal>(component: Type<T>, inputs?: any): ModalRef {
    this.setupModalContainerDiv();

    // const modalContainerRef = this.appRef.bootstrap(this.modalContainerFactory, this.modalContainer);
   const modalContainerRef = this.appRef.bootstrap(ModalContainerComponent, this.modalContainer)

    const modalComponentRef = modalContainerRef.instance.createModal<Modal>(component);

    if (inputs) {
      modalComponentRef.instance.data = inputs;
    }

    const modalRef = new ModalRef(modalContainerRef, modalComponentRef);

    return modalRef;
  }

  private setupModalContainerDiv(): void {
    this.modalContainer = document.createElement('div');
    document.getElementsByTagName('body')[0].appendChild(this.modalContainer);
  }

  // private setupModalContainerFactory(): void {
  //   this.modalContainerFactory = this.componentFactoryResolver.resolveComponentFactory(ModalContainerComponent);
  // }

}
