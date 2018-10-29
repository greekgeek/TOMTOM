<template>
  <div class="user-container">
    <div class="input-container">
      <div class="mdc-text-field name">
        <input type="text" id="my-text-field" class="mdc-text-field__input">
        <label class="mdc-floating-label" for="my-text-field">Name</label>
        <div class="mdc-line-ripple"></div>
      </div>
      <div class="mdc-text-field add">
        <input type="text" id="my-text-field" class="mdc-text-field__input">
        <label class="mdc-floating-label" for="my-text-field">Address</label>
        <div class="mdc-line-ripple"></div>
      </div>
      <div class="mdc-text-field mob">
        <input type="text" id="my-text-field" class="mdc-text-field__input">
        <label class="mdc-floating-label" for="my-text-field">Mobile Number</label>
        <div class="mdc-line-ripple"></div>
      </div>
      <button class="btn" v-on:click="func">Send</button>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters, mapState } from 'vuex'
import {MDCTextField} from '@material/textfield'
export default {
  name: 'user-view',
  data () {
    return {
      name: 'user-view'
    }
  },
  computed: {
    ...mapState(['dbData']),
    ...mapGetters(['getDbData',
      'getIndex'
    ])
  },
  created () {
    console.log('index is: ', this.getIndex)
  },
  methods: {
    ...mapMutations({ updateaData: 'UPDATE_DATA' }),
    func: function (event) {
      const textFieldName = new MDCTextField(document.querySelector('.name')).value
      const textFieldAdd = new MDCTextField(document.querySelector('.add')).value
      const textFieldMob = new MDCTextField(document.querySelector('.mob')).value
      console.log('chandan', textFieldName.value, textFieldAdd.value, textFieldMob.value)
      const obj = {name: textFieldName, address: textFieldAdd, mob: textFieldMob}
      this.updateaData(obj)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.user-container{
  position: absolute;
  display: block;
  height: 500px;
  width: 500px;
  .input-container{
    position: absolute;
    display: block;
    height: 100%;
    width: 100%;
    border: 2px solid green;
    .mdc-text-field{
      display: block;
      width: 300px;
      left: 20px;
    }
    .btn{
      position: absolute;
      display: block;
      left: 20px;
    }
  }
}
</style>
