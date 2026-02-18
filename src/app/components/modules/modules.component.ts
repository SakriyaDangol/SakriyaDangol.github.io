import { Component } from '@angular/core';
import { Module } from '../../models';
import { MODULES_DATA } from '../../data/modules-data';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.css']
})
export class ModulesComponent {
  modules: Module[] = MODULES_DATA;
}
