# 选择框（Select）

## 示例
### 基本形式

<!-- 有两种书写方式，这里推荐使用Tag方式，使用起来更加灵活。

#### Tag方式 -->

``` html
<u-linear-layout>
    <u-select>
        <u-select-item>苹果</u-select-item>
        <u-select-item>香蕉</u-select-item>
        <u-select-item>蛋糕</u-select-item>
    </u-select>
    <u-select>
        <u-select-item>请选择</u-select-item>
        <u-select-item>苹果</u-select-item>
        <u-select-item>香蕉</u-select-item>
        <u-select-item>蛋糕</u-select-item>
    </u-select>
</u-linear-layout>
```

<!-- #### Data方式
``` html
<u-linear-layout>
    <u-select :data="[
        { text: '苹果' },
        { text: '香蕉' },
        { text: '蛋糕' },
    ]"></u-select>
    <u-select :data="[
        { text: '请选择' },
        { text: '苹果' },
        { text: '香蕉' },
        { text: '蛋糕' },
    ]"></u-select>
</u-linear-layout>
``` -->

### 选择值

<!-- #### Tag方式 -->

``` html
<u-select value="banana">
    <u-select-item>请选择</u-select-item>
    <u-select-item value="apple">苹果</u-select-item>
    <u-select-item value="banana">香蕉</u-select-item>
    <u-select-item value="cake">蛋糕</u-select-item>
</u-select>
```

<!-- #### Data方式
``` html
<u-select value="cake" :data="[
    { text: '请选择' },
    { text: '苹果', value: 'A' },
    { text: '香蕉', value: 'B' },
    { text: '蛋糕', value: 'C' },
]"></u-select>
``` -->

### 只读、禁用、禁用某一项

<!-- #### Tag方式 -->

``` html
<u-linear-layout>
    <u-select value="cake" readonly>
        <u-select-item value="apple">苹果</u-select-item>
        <u-select-item value="banana">香蕉</u-select-item>
        <u-select-item value="cake">蛋糕</u-select-item>
    </u-select>
    <u-select value="cake" disabled>
        <u-select-item value="apple">苹果</u-select-item>
        <u-select-item value="banana">香蕉</u-select-item>
        <u-select-item value="cake">蛋糕</u-select-item>
    </u-select>
    <u-select value="cake">
        <u-select-item value="apple">苹果</u-select-item>
        <u-select-item value="banana" disabled>香蕉</u-select-item>
        <u-select-item value="cake">蛋糕</u-select-item>
    </u-select>
</u-linear-layout>
```

<!-- #### Data方式

``` html
<u-select value="cake" :data="[
    { text: '苹果', value: 'A' },
    { text: '香蕉', value: 'B', disabled: true },
    { text: '蛋糕', value: 'C' },
]"></u-select>
``` -->

### 分隔符

``` html
<u-select value="nut">
    <u-select-item value="cup">水杯</u-select-item>
    <u-select-item value="cup">牙刷</u-select-item>
    <u-select-divider></u-select-divider>
    <u-select-item value="nut">坚果</u-select-item>
    <u-select-item value="towel">毛巾</u-select-item>
    <u-select-item value="sofa">沙发</u-select-item>
</u-select>
```

### 分组

``` html
<u-select>
    <u-select-group title="洗具">
        <u-select-item>毛巾</u-select-item>
        <u-select-item>牙刷</u-select-item>
    </u-select-group>
    <u-select-group title="杯具">
        <u-select-item>牙缸</u-select-item>
        <u-select-item>水杯</u-select-item>
    </u-select-group>
    <u-select-group title="餐具">
        <u-select-item>筷子</u-select-item>
        <u-select-item>碗</u-select-item>
    </u-select-group>
</u-select>
```

## Select API
### Attrs/Props

| Attr/Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| data | Array\<{ text, value }\> | | Data书写方式中的数据列表 |
| value.sync, v-model | Any | | 当前选择的值 |
| field | String | `'text'` | 显示文本字段 |
| readonly | Boolean | `false` | 是否只读 |
| disabled | Boolean | `false` | 是否禁用 |

### Slots

#### (default)

插入`<u-select-item>`、`<u-select-divider>`或`<u-select-group>`子组件。

### Events

#### @before-select

选择某一项前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Any | 选择项的值 |
| $event.oldValue | Any | 旧的值 |
| $event.item | Object | 选择项相关对象 |
| $event.itemVM | SelectItem | 选择项子组件 |
| $event.preventDefault | Function | 阻止选择流程 |

#### @input

选择某一项时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | Any | 选择项的值 |

#### @select

选择某一项时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Any | 改变后的值 |
| $event.oldValue | Any | 旧的值 |
| $event.item | Object | 选择项相关对象 |
| $event.itemVM | SelectItem | 选择项子组件 |

#### @toggle

展开/收起选择框时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.open | Boolean | 展开/收起状态 |

## SelectItem API
### Attrs/Props

| Attr/Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| value | Any | | 此项的值 |
| disabled | Boolean | `false` | 禁用此项 |
| item | Object | | 相关对象。当选择此项时，抛出的事件会传递该对象，便于开发 |

### Slots

#### (default)

插入文本或HTML。

### Events

#### @before-select

选择此项前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Any | 此项的值 |
| $event.item | Object | 此项的相关对象 |
| $event.itemVM | SelectItem | 此组件 |
| $event.preventDefault | Function | 阻止选择流程 |

## SelectGroup API

### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| title | String |  | 显示的标题 |

### Slots

#### (default)

插入`<u-select-item>`或`<u-select-divider>`子组件。

#### title

自定义标题文本。

#### extra

在右侧可以附加内容。

## SelectDivider API

无
