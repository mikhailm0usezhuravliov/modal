import { ModalRef } from './modal-ref.model';

export abstract class Modal {

  modalInstance: ModalRef;
  data: any;

  close(output?: any): void {
    this.modalInstance.close(output);
  }

  dismiss(output?: any): void {
    this.modalInstance.dismiss(output);
  }

}
