class BSTNode{
  constructor(val){
    this.val = val;
    this.right = null;
    this.left = null;
  }
  subtreeCount(count=1){
    if(this.left){
      count += this.left.subtreeCount(count);
    }
    if (this.right){
      count += this.right.subtreeCount(count);
    }
    return count
  }
  subtreeHeight(){
    var lHeight = 0
    var rHeight = 0
    if(this.left){
      lHeight = this.left.subtreeHeight()
    }
    if(this.right){
      rHeight = this.right.subtreeHeight()
    }
    if (rHeight > lHeight){
      return rHeight + 1;
    } else {
      return lHeight + 1;
    }
  }
}


class BST{

  constructor(){
    this.root = null
  }

  insert(val){
    if (!this.root){
      this.root = new BSTNode(val);
    } else {
      var current = this.root;
      while (true)
      if (val > current.val && current.right){
        current = current.right; //traverse to the right
      } else if (val > current.val){
        current.right = new BSTNode(val); //insert value in new node
        return true
      } else if (val < current.val && current.left){
        current = current.left; //traverse to the left
      } else if (val < current.val){
        current.left = new BSTNode(val); //insert value in new node
        return true
      } else {
        return false // current.val was equal to val, no duplicates allowed
      }
    }
  }

  next(val){
    var prev = null;
    var current = this.root;
    while(current && current.val != val){
      if (current.val < val){
        current = current.right;
      }
      if (current.val > val){
        prev = current;
        current = current.left;
      }
    }
    if (!current){
      return null;
    }
    if (!current.right){
      return prev ? prev.val : prev;
    } else if (!current.right.left){
      return current.right.val;
    } else {
      current = current.right.left;
    }
    while(current){
      prev = current;
      current = current.left;
    }
    return prev.val;
  }

  height(){
    return this.root.subtreeHeight();
  }



}

var newTree = new BST();

var nums = [4,2,6,1,3,5,7,4.5, 4.25]

for (var x = 0; x < nums.length; x+=1){
  console.log(newTree.insert(nums[x]))
}
console.log(newTree)

console.log(newTree.next(4))

console.log(newTree.height())
