export interface TreeItem {
  id: number,
  parent: number | 'root',
  [key: string]: any
}