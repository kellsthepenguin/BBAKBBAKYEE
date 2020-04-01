'use strict'

class Target {
  constructor (name, canHairGrow) {
    this.name = name
    this.canHairGrow = canHairGrow
  }

  shootTalmobim () {
    if (this.canHairGrow) {
      this.canHairGrow = false
      console.log(this.name + ' 은(는) 탈모빔을 맞았다!')
    } else {
      console.log(this.name + ' 은(는) 이미 탈모다!')
    }
  }

  talmoHealing () {
    if (this.canHairGrow) {
      console.log(this.name + ' 은(는) 탈모가 아니다!')
    } else {
      this.canHairGrow = true
      console.log(this.name + ' 은(는) 탈모가 치료되었다!')
    }
  }
}

exports.Target = Target
