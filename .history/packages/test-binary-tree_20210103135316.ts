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
	private p: any = null;

	/**
	 * 左节点
	 *
	 * @private
	 * @type {*}
	 * @memberof BinaryTreeNode
	 */
	private left: any = null;

	/**
	 * 右节点
	 *
	 * @private
	 * @type {*}
	 * @memberof BinaryTreeNode
	 */
	private right: any = null;

	/**
	 * key
	 *
	 * @private
	 * @type {*}
	 * @memberof BinaryTreeNode
	 */
	private key: any;

	/**
	 * value
	 *
	 * @private
	 * @type {*}
	 * @memberof BinaryTreeNode
	 */
	private value: any;

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
    
}
