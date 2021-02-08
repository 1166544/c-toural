/**
 * 二叉树节点
 *
 * @class BinaryTreeNode
 */
class BinaryTreeNode {
	/**
	 * 父节点指向
	 *
	 * @private
	 * @type {*}
	 * @memberof BinaryTreeNode
	 */
	public p: BinaryTreeNode = null;

	/**
	 * 左节点
	 *
	 * @private
	 * @type {*}
	 * @memberof BinaryTreeNode
	 */
	public left: any = null;

	/**
	 * 右节点
	 *
	 * @private
	 * @type {*}
	 * @memberof BinaryTreeNode
	 */
	public right: any = null;

	/**
	 * key
	 *
	 * @private
	 * @type {*}
	 * @memberof BinaryTreeNode
	 */
	public key: any;

	/**
	 * value
	 *
	 * @private
	 * @type {*}
	 * @memberof BinaryTreeNode
	 */
	public value: any;

	constructor(key: any, value: any) {
		// hole
		this.key = key;
		this.value = value;
	}
}

/**
 * 二叉树
 *
 * @class BinaryTree
 */
class BinaryTree {
	private root: BinaryTreeNode;

	constructor() {
		// hole
	}

	/**
	 * 创建节点
	 *
	 * @static
	 * @param {*} key
	 * @param {*} value
	 * @returns {*}
	 * @memberof BinaryTree
	 */
	public static createNode(key: any, value: any): any {
		return new BinaryTreeNode(key, value);
	}

	/**
	 * 搜索
	 *
	 * @param {*} key
	 * @memberof BinaryTree
	 */
	public search(key: any): void {
		let p: BinaryTreeNode = this.root;

		if (!p) {
			return;
		}

		while (p && p.key !== key) {
			if (p.key < key) {
				p = p.right;
			} else {
				p = p.left;
			}
		}

		return p;
	}
}
