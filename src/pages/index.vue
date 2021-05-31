<template>
  <div class="contain">
    <div id="puzzleArea">
      <canvas class="can" ref="can"></canvas>
    </div>
    <div class="btns">
      <button @click="newGame">重新游戏</button>
      <br/>
      请输入行列数：<input type="text" v-model="row" placeholder="请输入行数"><br/>
      <button @click="newGame">确定</button>
      <br/>
      <button @click="isWinHandler">检验</button>
      <br/>
      <span>步数：{{ step }}</span><br/>
      <span>预览：</span><br/>
      <img ref="img" class="img" src="../../public/image/MonaLisa.png" alt="error">
    </div>
  </div>
</template>

<style>

</style>

<script>
export default {
  data() {
    return {
      // row:拼图的总行数，column:拼图的总列数
      row: 3,
      column: 3,
      // 随机打乱的次数
      num: 100,
      // pic:拼图的所有子集和；
      // 元素：index：子图片的位置编号
      // row/column:对原图分割后的横纵编号
      // x/y:在canvas中的坐标位置（不会改变）
      pic: [{x: 0, y: 0, row: 0, column: 0, index: 0}],
      sign: 15,
      isWin: false,
      step: 0,
    }
  },
  mounted() {
    this.newGame();
    this.column = this.row
    document.onkeydown = (event) => {
      let key = event.keyCode;
      if (key === 38 || key === 87) this.moveHandler('up');
      else if (key === 40 || key === 83) this.moveHandler('down');
      else if (key === 37 || key === 65) this.moveHandler('left');
      else if (key === 39 || key === 68) this.moveHandler('right');
    }
  },
  methods: {
    // 判断是否完成拼图
    isWinHandler() {
      for (let i = 0; i < this.row * this.column; i++) {
        if (this.pic[i].x !== this.pic[i].row || this.pic[i].y !== this.pic[i].column) {
          this.isWin = false;
          return;
        }
      }
      if (confirm('游戏结束，您的分数为：' + this.step + ', 是否开始一句新游戏')) {
        this.newGame()
      }
    },
    // 移动的函数方法
    moveHandler(dir) {
      let re, temp = {};
      if (dir === 'up' && this.pic[this.sign].x > 0) {
        // 根据空白块的row和column推算出上面一块图片的序号
        // 在将两个图片快进行互换位置，及交换row、column、index
        // 重新赋值this.sign（标志着空白块的序号：默认15）
        re = (this.pic[this.sign].x - 1) * this.row + this.pic[this.sign].y;
      } else if (dir === 'down' && this.pic[this.sign].x < this.row - 1) {
        re = (this.pic[this.sign].x + 1) * this.row + this.pic[this.sign].y;
      } else if (dir === 'left' && this.pic[this.sign].y > 0) {
        re = (this.pic[this.sign].x) * this.row + this.pic[this.sign].y - 1;
      } else if (dir === 'right' && this.pic[this.sign].y < this.column - 1) {
        re = (this.pic[this.sign].x) * this.row + this.pic[this.sign].y + 1;
      }
      temp.row = this.pic[re].row;
      temp.column = this.pic[re].column;
      temp.index = this.pic[re].index;
      this.pic[re] = {
        ...this.pic[re],
        row: this.pic[this.sign].row,
        column: this.pic[this.sign].column,
        index: this.pic[this.sign].index
      };
      this.pic[this.sign] = {...this.pic[this.sign], ...temp};
      this.step = this.step + 1;
      this.drawHandler();
    },
    // 绘制拼图
    drawHandler() {
      let canvas = this.$refs.can;
      let ctx = canvas.getContext('2d');
      canvas.width = 640;
      canvas.height = 640;
      ctx.clearRect(30, 30, 640, 640);
      let width = canvas.width / this.column
      let height = canvas.width / this.row
      let img = new Image()
      img.src = require('../../public/image/MonaLisa.png');
      img.onload = () => {
        for (let i = 0; i < this.row * this.column; i++) {
          // 绘制到canvas的各元素的起始坐标
          let dx = this.pic[i].y * width;
          let dy = this.pic[i].x * height;
          // 对图片进行切割的起始点坐标
          let cx = this.pic[i].column * width;
          let cy = this.pic[i].row * height;
          ctx.drawImage(img, cx, cy, width, height, dx, dy, width, height);
          if (this.pic[i].index === -1) {
            this.sign = i;
            ctx.clearRect(dx, dy, width, height);
          }
        }
      }
    },
    // 获取随机排序
    randomHandler() {
      for (let i = 0; i < this.row * this.column; i++) {
        // 设置切割后每个小图片的位置
        let row = parseInt(i / this.row);
        let column = i - row * this.column;
        // 对在canvas的排列进行初始化，不会进行改变
        let x = parseInt(i / this.row);
        let y = i - x * this.column;
        this.pic[i] = {...this.pic[i], x: x, y: y, row: row, column: column, index: i};
        if (i === (this.row * this.column - 1)) {
          this.pic[i] = {...this.pic[i], row: row, column: column, index: -1};
        }
      }
      for (let i = 0; i < this.num; i++) {
        let ran1, ran2, temp = {};
        // 随机获取0-14
        ran1 = parseInt((this.row * this.column - 1) * Math.random())
        ran2 = parseInt((this.row * this.column - 1) * Math.random())
        temp.row = this.pic[ran1].row
        temp.column = this.pic[ran1].column
        this.pic[ran1] = {...this.pic[ran1], row: this.pic[ran2].row, column: this.pic[ran2].column}
        this.pic[ran2] = {...this.pic[ran2], ...temp}
      }
    },
    newGame() {
      if (this.column <= 1) {
        this.$message.error('行列数需要大于1')
      }
      this.column = this.row
      this.isWin = false;
      this.step = 0;
      this.randomHandler();
      this.drawHandler();
      this.isWinHandler()
    }
  }
}
</script>

<style scoped>
.btns > span {
  display: inline-block;
  width: 80px;
  font-size: 12px;
  height: 24px;
  text-align: center;
  line-height: 24px;
  margin-bottom: 5px;
  background-color: thistle;
  cursor: pointer;
}

.btns {
  height: 400px;
  border: 1px solid tan;
  border-radius: 5px;
  background-origin: border-box;
  padding: 5px;
  position: absolute;
  left: 760px;
  top: 30px;
  width: 200px;
}

.img {
  display: inline-block;
  width: 180px;
}

.can {
  border: 1px solid teal;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.contain {
  width: 1000px;
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

#puzzleArea {
  float: left;
  width: 700px;
  height: 700px;
  position: absolute;
  top: 30px;
  border: 1px solid black;
  border-radius: 50px;
  text-align: center;
}
</style>
