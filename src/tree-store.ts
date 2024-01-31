import { TreeItem } from "./interface";

export class TreeStore {
  private itemsMap: Map<number | 'root', TreeItem>

  constructor (items: TreeItem[]) {
    this.itemsMap = new Map()

    for (const item of items) {
      this.itemsMap.set(item.id, item)
    }
  }

  getAll (): TreeItem[] {
    return Array.from(this.itemsMap.values())
  }

  getItem (id: number | 'root'): TreeItem | undefined {
    return this.itemsMap.get(id)
  }

  getChildren (id: number | 'root'): TreeItem[] {
    return Array.from(this.itemsMap.values()).filter(item => item.parent === id)
  }

  getAllChildren (id: number | 'root'): TreeItem[] {
    const result: TreeItem[] = []
    const children = this.getChildren(id)

    result.push(...children)

    for (const child of children) {
      result.push(...this.getAllChildren(child.id))
    }

    return result
  }

  getAllParents (id: number | 'root', isInitId: boolean = true): TreeItem[] {
    const item = this.getItem(id)

    if (!item || !item.parent) {
      return []
    }

    return isInitId
      ? [...this.getAllParents(item.parent, false)]
      : [item,...this.getAllParents(item.parent, false)]
  }
}
