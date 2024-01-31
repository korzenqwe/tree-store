export interface TreeItem {
  id: number,
  parent: number | 'root',
  type?: string | null
}