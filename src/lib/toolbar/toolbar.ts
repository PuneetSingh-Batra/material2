/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {
  Component,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  Directive,
  ElementRef,
  Renderer2,
} from '@angular/core';
import {CanColor, MATERIAL_COMPATIBILITY_MODE, mixinColor} from '@angular/material/core';


@Directive({
  selector: 'md-toolbar-row, mat-toolbar-row',
  host: {'class': 'mat-toolbar-row'},
})
export class MdToolbarRow {}

// Boilerplate for applying mixins to MdToolbar.
/** @docs-private */
export class MdToolbarBase {
  constructor(public _renderer: Renderer2, public _elementRef: ElementRef) {}
}
export const _MdToolbarMixinBase = mixinColor(MdToolbarBase);


@Component({
  moduleId: module.id,
  selector: 'md-toolbar, mat-toolbar',
  templateUrl: 'toolbar.html',
  styleUrls: ['toolbar.css'],
  inputs: ['color'],
  host: {
    'class': 'mat-toolbar',
    'role': 'toolbar'
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false,
  viewProviders: [{provide: MATERIAL_COMPATIBILITY_MODE, useValue: true}],
})
export class MdToolbar extends _MdToolbarMixinBase implements CanColor {

  constructor(renderer: Renderer2, elementRef: ElementRef) {
    super(renderer, elementRef);
  }

}
