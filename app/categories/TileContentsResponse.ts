    export interface Item {
        title: string;
        children: any;
        url: string;
        imageUrl: string;
        allLinkTitle: string;
    }

    export interface TileNavigationBlock {
        item: Item[];
    }

    export interface ITileContentsResponse {
        tileNavigationBlock: TileNavigationBlock;
    }



