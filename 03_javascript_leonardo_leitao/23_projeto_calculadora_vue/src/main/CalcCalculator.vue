<template>
  <div class="calculator">
    <CalcDisplay :value="displayValue" />
    <CalcButton label="AC" triple @onClick="clearMemory" />
    <CalcButton label="/" operation @onClick="setOperation" />
    <CalcButton label="7" @onClick="addDigit" />
    <CalcButton label="8" @onClick="addDigit" />
    <CalcButton label="9" @onClick="addDigit" />
    <CalcButton label="*" operation @onClick="setOperation" />
    <CalcButton label="4" @onClick="addDigit" />
    <CalcButton label="5" @onClick="addDigit" />
    <CalcButton label="6" @onClick="addDigit" />
    <CalcButton label="-" operation @onClick="setOperation" />
    <CalcButton label="1" @onClick="addDigit" />
    <CalcButton label="2" @onClick="addDigit" />
    <CalcButton label="3" @onClick="addDigit" />
    <CalcButton label="+" operation @onClick="setOperation" />
    <CalcButton label="0" double @onClick="addDigit" />
    <CalcButton label="." @onClick="addDigit" />
    <CalcButton label="=" operation @onClick="setOperation" />
  </div>
</template>

<script>
import CalcButton from '@/components/CalcButton.vue'
import CalcDisplay from '@/components/CalcDisplay.vue'

export default {
  data: function () {
    return {
      displayValue: '0',
      clearDisplay: false,
      operation: null,
      values: [0, 0],
      current: 0
    }
  },
  components: { CalcButton, CalcDisplay },
  methods: {
    clearMemory() {
      Object.assign(this.$data, this.$options.data())
    },
    setOperation(operation) {
      if (this.current === 0) {
        this.operation = operation
        this.current = 1
        this.clearDisplay = true
      } else {
        const equals = operation === "="
        const currentOperation = this.operation

        try {
          this.values[0] = eval(
            `${this.values[0]} ${currentOperation} ${this.values[1]}`
          )
        } catch (e) {
          this.$emit('OnError', e)
        }

        this.values[1] = 0
        this.displayValue = this.values[0]
        this.operation = equals ? null : operation
        this.current = equals ? 0 : 1
        this.clearDisplay = !equals
      }
    },
    addDigit(n) {
      if (n === "." && this.displayValue.includes(".")) {
        return
      }

      const clearDisplay = this.displayValue === "0" || this.clearDisplay
      const currentValue = clearDisplay ? "" : this.displayValue
      const displayValue = currentValue + n

      this.displayValue = displayValue
      this.clearDisplay = false
      this.values[this.current] = displayValue
    }
  }
}
</script>

<style>
.calculator {
  height: 320px;
  width: 235px;
  border-radius: 5px;
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: 1fr 48px 48px 48px 48px 48px;
}
</style>