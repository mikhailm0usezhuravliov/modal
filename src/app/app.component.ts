import { Component } from '@angular/core';
import { ModalComponent } from './modal-service/components/modals/modal.component';
import { ModalService } from './modal-service/modal-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private modalService: ModalService
  ) { }

  onCreateModal(): void {
    const modalRef = this.modalService.open(ModalComponent, { title: 'My dynamic title', message: 'My dynamic message' });

    modalRef.onResult().subscribe(
      closed => console.log('closed', closed),
      dismissed => console.log('dismissed', dismissed),
      () => console.log('completed')
    );
  }
}
