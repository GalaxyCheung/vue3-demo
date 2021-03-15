<template>
  <div>
    <h3>ref和reactive</h3>
    <div>
      <p><span class="desc">ref在数组或对象里的值在触发更新后并不会在页面上及时响应</span></p>
      <span style="margin-right: 15px;">ref0: {{ ref0 }}</span><br>
      <span style="margin-right: 15px;">ref1: {{ ref1 }} ,</span>
      <span style="margin-right: 15px;">ref1.count: {{ ref1.count }} ,</span>
      <span style="margin-right: 15px;">ref1.o.count: {{ ref1.o.count }} ,</span>
      <span style="margin-right: 15px;">ref1.o.arr: {{ ref1.o.arr }}</span>
      <button
        style="margin-right: 15px;"
        @click="refAdd()"
      >
        +1
      </button>
      <button @click="ref_1_O_Count_Add()">
        ref1.o.count+1
      </button>
    </div>

    <div>
      <span style="margin-right: 15px;">reactive0: {{ reactive0 }} ,</span>
      <span style="margin-right: 15px;">reactive0.count: {{ reactive0.count }} ,</span>
      <span style="margin-right: 15px;">reactive0.ref0: {{ reactive0.ref0 }}</span>
      <button @click="reactiveAdd()">
        +1
      </button>
    </div>

    <div>
      <h3>shallowRef和shallowReactive</h3>
      <div>
        <p>
          <span class="desc">使用ref和reactive声明的变量为递归监听，使用shallowRef和shallowReactive声明的变量为非递归监听。</span><br>
          <span class="desc">通俗的讲就是ref和reactive创建的对象将会被vue内部进行递归监听，可以监听到对象中的对象是否发生了改变从而更新视图，而shallowRef和shallowReactive创建的对象只能监听到首层对象的变化。</span>
        </p>
        <span style="margin-right: 15px;">shallowRef0: {{ shallowRef0 }}</span><br>
        <span style="margin-right: 15px;">shallowRef1: {{ shallowRef1 }} ,</span>
        <span style="margin-right: 15px;">shallowRef1.count: {{ shallowRef1.count }} ,</span>
        <span style="margin-right: 15px;">shallowRef1.o.count: {{ shallowRef1.o.count }} ,</span>
        <span style="margin-right: 15px;">shallowRef1.o.arr: {{ shallowRef1.o.arr }}</span>
        <button
          style="margin-right: 15px;"
          @click="shallowRefAdd()"
        >
          +1
        </button>
        <button @click="shallowRef_1_O_Count_Add()">
          shallowRef1.o.count+1
        </button>
      </div>

      <div>
        <span style="margin-right: 15px;">shallowReactive0: {{ shallowReactive0 }} ,</span>
        <span style="margin-right: 15px;">shallowReactive0.count: {{ shallowReactive0.count }} ,</span>
        <span style="margin-right: 15px;">shallowReactive0.ref0: {{ shallowReactive0.shallowRef0.value }}</span>
        <button @click="shallowReactiveAdd()">
          +1
        </button>
      </div>

      <h3>triggerRef</h3>
      <div class="desc">triggerRef-手动执行与 shallowRef 关联的任何副作用，强制更新视图</div>
      <div>
        <button @click="triggerRef0()">
          triggerRef
        </button>
      </div>

      <h3>console</h3>
      <div>
        <button @click="typeConsole()">
          控制台打印各类型
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import {
  ref,
  reactive,
  shallowRef,
  shallowReactive,
  triggerRef
} from 'vue'

export default {
  name: 'RefAndReactive',
  setup () {
    // ref和reactive
    // const state = ref(false)
    // 等价于
    // const state = reactive({
    //   value: false,
    // })
    const refAndReactiveTest = () => {
      const ref0 = ref(0)
      const ref1 = ref({
        count: 0,
        o: {
          count: 0,
          arr: [0]
        }
      })
      const refAdd = () => {
        ref0.value++
        ref1.value.count = ref0.value
        ref1.value.o.count++
        ref1.value.o.arr = [ref0.value]
      }
      // eslint-disable-next-line camelcase
      const ref_1_O_Count_Add = () => {
        ref1.value.o.count++
      }

      const reactive0 = reactive({
        count: 2,
        ref0
      })
      const reactiveAdd = () => {
        reactive0.count++
        reactive0.ref0++
      }

      // shallowRef和shallowReactive
      const shallowRef0 = shallowRef(0)
      const shallowRef1 = shallowRef({
        count: 0,
        o: {
          count: 0,
          arr: [0]
        }
      })
      const shallowRefAdd = () => {
        shallowRef0.value++
        shallowRef1.value.count = shallowRef0.value
        shallowRef1.value.o.count++
        shallowRef1.value.o.arr = [shallowRef0.value]
      }
      // eslint-disable-next-line camelcase
      const shallowRef_1_O_Count_Add = () => {
        shallowRef1.value.o.count++
      }

      const shallowReactive0 = shallowReactive({
        count: 3,
        shallowRef0
      })
      const shallowReactiveAdd = () => {
        shallowReactive0.count++
        shallowReactive0.shallowRef0.value++
      }

      // triggerRef
      const triggerRef0 = () => {
        triggerRef(shallowRef0)
        triggerRef(shallowRef1)
      }

      // console
      const typeConsole = () => {
        console.log('================ref0')
        console.log(ref0)
        console.log('================reactive0')
        console.log(reactive0)
        console.log('================shallowRef0')
        console.log(shallowRef0)
        console.log('================shallowReactive0')
        console.log(shallowReactive0)
        console.log('================')
      }

      return {
        ref0,
        ref1,
        reactive0,
        refAdd,
        ref_1_O_Count_Add,
        reactiveAdd,
        shallowRef0,
        shallowRef1,
        shallowReactive0,
        shallowRefAdd,
        shallowRef_1_O_Count_Add,
        shallowReactiveAdd,
        triggerRef0,
        typeConsole
      }
    }

    const result = refAndReactiveTest()

    return {
      ...result
    }
  }
}
</script>
