import { Component, OnInit }  from '@angular/core';


import { NodeService } from './node.service';
import {INode} from "./Node";

@Component({
    templateUrl: 'app/categories/node-list.component.html',
    styleUrls: ['app/categories/node-list.component.css']
})
export class NodeListComponent implements OnInit {
    pageTitle: string = 'Node List';
    errorMessage: string;

    response: INode;

    constructor(private _nodeService: NodeService) {
    }

    ngOnInit(): void {
        this._nodeService.getNodes()
                .subscribe(response => this.response = response,
                           error => this.errorMessage = <any>error);
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Node List: ' + message;
    }
}
