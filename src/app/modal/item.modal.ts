export interface IItem {
    id: number;
    name: string;
    registered: string;
    role: string;
    status: string;
    _props?: any;  // Optional properties like color, alignment
    _cellProps?: any;  // Cell-specific properties
    _selected?: boolean;  // Selection flag
  }

  interface Column {
    key: string;
    label?: string;
    _style?: { [key: string]: string };
    _props?: { [key: string]: any };
    _classes?: string;
    filter?: boolean;
    sorter?: boolean;
  }