export interface OpenedItemProps {
	item: CatalogItem;
	onClick: () => void;
}

export interface CatalogItem {
	text: string;
}

export interface CatalogProps {
	items: CatalogItem[];
	setIndex: (index: number) => void;
}

export interface CatalogItemProps {
	item: CatalogItem;
	open: () => void;
	i: number;
}
