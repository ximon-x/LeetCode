class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

class TreeNode {
	val: number
	left: TreeNode | null
	right: TreeNode | null

	constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
		this.val = (val === undefined ? 0: val)
		this.left = (left === undefined ? null: left)
		this.right = (left === undefined ? null: right)
	}
}

class Stack {
	data: number[]
	size: number

	constructor(size: number) {
		this.data = ()

	}


}
