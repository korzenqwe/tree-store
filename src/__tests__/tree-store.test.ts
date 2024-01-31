import { TreeItem } from '../interface'
import { TreeStore } from '../tree-store'

describe('TreeStore', () => {
  let treeStore: TreeStore

  beforeEach(() => {
    const items = [
      { id: 1, parent: 'root' },
      { id: 2, parent: 1, type: 'test' },
      { id: 3, parent: 1, type: 'test' },
      { id: 4, parent: 2, type: 'test' },
      { id: 5, parent: 2, type: 'test' },
      { id: 6, parent: 2, type: 'test' },
      { id: 7, parent: 4, type: null },
      { id: 8, parent: 4, type: null }
    ] as TreeItem[]

    treeStore = new TreeStore(items)
  })

  it('should return all items', () => {
    expect(treeStore.getAll()).toEqual([
      { id: 1, parent: 'root' },
      { id: 2, parent: 1, type: 'test' },
      { id: 3, parent: 1, type: 'test' },
      { id: 4, parent: 2, type: 'test' },
      { id: 5, parent: 2, type: 'test' },
      { id: 6, parent: 2, type: 'test' },
      { id: 7, parent: 4, type: null },
      { id: 8, parent: 4, type: null }
    ])
  })

  it('should return item by id', () => {
    expect(treeStore.getItem(2)).toEqual({ id: 2, parent: 1, type: 'test' })
  })

  it('should return children of item by id', () => {
    expect(treeStore.getChildren(2)).toEqual([
      { id: 4, parent: 2, type: 'test' },
      { id: 5, parent: 2, type: 'test' },
      { id: 6, parent: 2, type: 'test' }
    ])
  })

  it('should return all children of item by id', () => {
    console.log(treeStore.getAllChildren(2))
    expect(treeStore.getAllChildren(2)).toEqual([
      { id: 4, parent: 2, type: 'test' },
      { id: 5, parent: 2, type: 'test' },
      { id: 6, parent: 2, type: 'test' },
      { id: 7, parent: 4, type: null },
      { id: 8, parent: 4, type: null }
    ])
  })

  it('should return all parents of item by id', () => {
    expect(treeStore.getAllParents(7)).toEqual([
      { id: 4, parent: 2, type: 'test' },
      { id: 2, parent: 1, type: 'test' },
      { id: 1, parent: 'root' }
    ])
  })
})