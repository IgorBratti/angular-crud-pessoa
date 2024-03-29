import { Component, Input, OnInit } from '@angular/core';
import { Endereco } from 'src/app/shared';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-modal-endereco',
  templateUrl: './modal-endereco.component.html',
  styleUrls: ['./modal-endereco.component.css']
})
export class ModalEnderecoComponent implements OnInit {
  @Input() endereco!: Endereco;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
