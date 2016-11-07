import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { NodeListComponent } from './node-list.component';


import { NodeService } from './node.service';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: 'categories', component: NodeListComponent }
    ])
  ],
  declarations: [
    NodeListComponent
  ],
  providers: [
    NodeService
  ]
})
export class NodeModule {}
