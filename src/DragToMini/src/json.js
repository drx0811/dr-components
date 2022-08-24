
export const baseCtrl = [
  {
    title:"常用模板",
    code:'commonCtrl',
    children:[
      {
        name: '推荐码',
        code: 'comCode',
      },
    ]
  },
  {
    title:"基础控件",
    code:'basicCtrl',
    children:[
      {
        name: '单行输入框',
        code: 'input',
        props: {
          type: 'field',
          required: true,
          isTitleRow: true,
          label: '单行输入',
          placeholder: '请输入',
          value: '',
        },
      },
      {
        name: '多行输入框',
        code: 'textArea',
        props: {
          type: 'field',
          inputType: 'textarea',
          isTitleRow: true,
          required: true,
          label: '多行输入',
          placeholder: '请输入',
          value: '',
        },
      },
      {
        name: '单选按钮',
        code: 'radio',
        props: {
          type: 'radio',
          isTitleRow: true,
          label: '单选标题',
          required: true,
          value: ['a'],
          direction: '',
          enum: [
            {
              code: 'a',
              text: '温州',
            },
            {
              code: 'e',
              text: '杭州',
            },
          ],
        },
      },
      {
        name: '复选按钮',
        code: 'checkbox',
        props: {
          type: 'checkboxGroup',
          isTitleRow: true,
          label: '哦哦哦哦哦',
          required: true,
          value: [],
          direction: 'horizontal',
          enum: [
            {
              code: 'a',
              text: '温州',
            },
            {
              code: 'e',
              text: '杭州',
            },
          ],
        },
      },
      {
        name: '日期选择',
        code: 'datePicker',
        props: {
          type: 'calendar',
          isTitleRow: true,
          required: true,
          label: '热热热热热',
          placeholder: '请输入烟草营业执照照片',
          value: '',
        },
      },
      {
        name: '日期区间',
        code: 'dateRange',
        props: {
          type: 'calendar',
          isTitleRow: true,
          required: true,
          label: '热热热热热',
          placeholder: '请输入烟草营业执照照片',
          value: '',
        },
      },
      {
        name: '附件',
        code: 'fj',
        props: {
          type: 'upload',
          label: '热热热热热',
          isTitleRow: true,
          required: true,
          placeholder: '上传照片',
        },
      },
      {
        name: '图片',
        code: 'image',
        props: {
          type: 'image',
          isTitleRow: true,
          required: true,
          label: '热热热热热',
        },
      },
      {
        name: '标题',
        code: 'title',
        props: {
          type: 'title',
          title: '标题',
          desc: '标题描述',
        },
      },
      {
        name: '链接',
        code: 'link',
        props: {
          type: 'navigator',
          target: '',
          label: '跳转文案',
        },
      },
      {
        name: '数字输入框',
        code: 'number',
        props: {
          type: 'field',
          inputType: 'number',
          isTitleRow: true,
          required: true,
          label: '热热热热热',
          placeholder: '请输入烟草营业执照照片',
          value: '',
          titleWidth: '9em',
        },
      },
      {
        name: '文字说明',
        code: 'desc',
        props: {
          type: 'richText',
          required: true,
          label: '热热热热热',
          value: `
        <div class="div_class">
          <h1>自定义说明</h1>
          <p class="p">
            Life is&nbsp;<i>like</i>&nbsp;a box of
            <b>&nbsp;chocolates</b>.
          </p>  
        </div>
        `,
        },
      },
      {
        name: '下拉选项框',
        code: 'picker',
        props: {
          type: 'picker',
          required: true,
          isTitleRow: true,
          label: '热热热热热',
          placeholder: '请输入烟草营业执照照片',
          value: '',
          enum: [
            {
              code: 'a',
              text: '温州',
            },
            {
              code: 'e',
              text: '杭州',
            },
          ],
        },
      },
      {
        name: '地址选择',
        code: 'address',
        props: {
          type: 'area',
          isTitleRow: true,
          required: true,
          label: '热热热热热',
          placeholder: '请输入烟草营业执照照片',
          value: '',
        },
      },
    ]
  },
  {
    title:"布局控件",
    code:'layoutCtrl',
    children: [
      {
        name: '步骤条',
        code: 'step',
        props: {
          type: 'step',
          active: 0,
          direction: '',
          enum: [
            {
              code: 'a',
              text: '温州',
            },
            {
              code: 'e',
              text: '杭州',
            },
          ],
        },
      },
      {
        name: '折叠块',
        code: 'grid',
        props: {
          type: 'grid',
          children: [],
        },
      },
    ],
  }
]
export const componentLib =[
  {
    title:"常用组件库",
    code:'commonComponent',
    children: [
      {
        name: '身份认证第一步',
        code: 'identityAuthOne',
        props:{
          children: [
            {
              name: '步骤条',
              code: 'step',
              props: {
                type: 'step',
                active: 0,
                direction: '',
                enum: [
                  {
                    text: '步骤一',
                    code: 0,
                  },
                  {
                    text: '步骤二',
                    code: 1,
                  },
                  {
                    text: '步骤三',
                    code: 2,
                  },
                ],
              },
            },
            {
              name: '标题',
              code: 'title',
              props: {
                type: 'title',
                title: '标题',
                desc: '标题描述',
              },
            },
            {
              name: '折叠块',
              code: 'grid',
              props: {
                type: 'grid',
                children: [
                  {
                    name: '附件',
                    code: 'fj',
                    props: {
                      type: 'upload',
                    },
                  },
                  {
                    name: '附件',
                    code: 'fj',
                    props: {
                      type: 'upload',
                    },
                  },
                ],
              },
            },
          ]
        },
        group:true,
        allFormItem:{
          validityDate:100,
          realAuthMethod:'1',
        },
      },
      {
        name: '身份认证第二步',
        code: 'identityAuthTwo',
        props:{
          children: [
            {
              name: '步骤条',
              code: 'step',
              props: {
                type: 'step',
                active: 1,
                direction: '',
                enum: [
                  {
                    text: '步骤一',
                    code: 0,
                  },
                  {
                    text: '步骤二',
                    code: 1,
                  },
                  {
                    text: '步骤三',
                    code: 2,
                  },
                ],
              },
            },
            {
              name: '单行输入框',
              code: 'input',
              props: {
                type: 'field',
                required: true,
                isTitleRow: true,
                label: '姓名',
                placeholder: '请输入',
                value: '',
              },
            },
            {
              name: '单行输入框',
              code: 'input',
              props: {
                type: 'field',
                required: true,
                isTitleRow: true,
                label: '身份证号',
                placeholder: '请输入',
                value: '',
              },
            },
            {
              name: '单选按钮',
              code: 'radio',
              props: {
                type: 'radio',
                isTitleRow: true,
                label: '性别',
                required: true,
                value: ['a'],
                direction: '',
                enum: [
                  {
                    code: 'a',
                    text: '男',
                  },
                  {
                    code: 'e',
                    text: '女',
                  },
                ],
              },
            },
            {
              name: '单行输入框',
              code: 'input',
              props: {
                type: 'field',
                required: true,
                isTitleRow: true,
                label: '民族',
                placeholder: '请输入',
                value: '',
              },
            },
            {
              name: '日期选择',
              code: 'datePicker',
              props: {
                type: 'calendar',
                isTitleRow: true,
                required: true,
                label: '出生年月',
                placeholder: '请选择日期',
                value: '',
              },
            },
            {
              name: '日期区间',
              code: 'dateRange',
              props: {
                type: 'calendar',
                isTitleRow: true,
                required: true,
                label: '证件有效期',
                placeholder: '请选择证件有效期',
                value: '',
              },
            },
          ]
        },
        group:true,
        allFormItem:{
          validityDate:100,
          realAuthMethod:'1',
        },
      },
      {
        name: '身份认证第三步',
        code: 'identityAuthThree',
        props:{
          children: [
            {
              name: '步骤条',
              code: 'step',
              props: {
                type: 'step',
                active: 2,
                direction: '',
                enum: [
                  {
                    text: '步骤一',
                    code: 0,
                  },
                  {
                    text: '步骤二',
                    code: 1,
                  },
                  {
                    text: '步骤三',
                    code: 2,
                  },
                ],
              },
            },
            {
              name: '单行输入框',
              code: 'input',
              props: {
                type: 'field',
                required: true,
                isTitleRow: true,
                label: '姓名',
                placeholder: '请输入',
                value: '',
              },
            },
            {
              name: '单行输入框',
              code: 'input',
              props: {
                type: 'field',
                required: true,
                isTitleRow: true,
                label: '身份证号',
                placeholder: '请输入',
                value: '',
              },
            },
            {
              name: '单行输入框',
              code: 'input',
              props: {
                type: 'field',
                required: true,
                isTitleRow: true,
                label: '银行卡号',
                placeholder: '请输入',
                value: '',
              },
            },
            {
              name: '单行输入框',
              code: 'input',
              props: {
                type: 'field',
                required: true,
                isTitleRow: true,
                label: '手机号',
                placeholder: '请输入',
                value: '',
              },
            },
          ]
        },
        group:true,
        allFormItem:{
          validityDate:100,
          realAuthMethod:'1',
        },
      },
      {
        name:'征信授权',
        code:'creditAuth',
        group:true,
        allFormItem:{
          readMethod:'1',
          readTime:12,
        },
        props:{
          children: [
            {
              name: '单行输入框',
              code: 'input',
              props: {
                type: 'field',
                required: true,
                isTitleRow: true,
                label: '姓名',
                placeholder: '请输入',
                value: '',
              },
            },
            {
              name: '单行输入框',
              code: 'input',
              props: {
                type: 'field',
                required: true,
                isTitleRow: true,
                label: '身份证号',
                placeholder: '请输入',
                value: '',
              },
            },
            {
              name: '单选按钮',
              code: 'radio',
              props: {
                type: 'radio',
                isTitleRow: true,
                label: '性别',
                required: true,
                value: ['a'],
                direction: '',
                enum: [
                  {
                    code: 'a',
                    text: '男',
                  },
                  {
                    code: 'e',
                    text: '女',
                  },
                ],
              },
            },
            {
              name: '单行输入框',
              code: 'input',
              props: {
                type: 'field',
                required: true,
                isTitleRow: true,
                label: '民族',
                placeholder: '请输入',
                value: '',
              },
            },
            {
              name: '日期选择',
              code: 'datePicker',
              props: {
                type: 'calendar',
                isTitleRow: true,
                required: true,
                label: '出生年月',
                placeholder: '请选择日期',
                value: '',
              },
            },
            {
              name: '日期区间',
              code: 'dateRange',
              props: {
                type: 'calendar',
                isTitleRow: true,
                required: true,
                label: '证件有效期',
                placeholder: '请选择证件有效期',
                value: '',
              },
            },
            {
              name: '单行输入框',
              code: 'input',
              props: {
                type: 'field',
                required: true,
                isTitleRow: true,
                label: '手机号',
                placeholder: '请输入',
                value: '',
              },
            },
            {
              name: '单行输入框',
              code: 'input',
              props: {
                type: 'field',
                required: true,
                isTitleRow: true,
                label: '短信验证码',
                placeholder: '请输入',
                value: '',
              },
            },
          ]
        }
      },
      {
        name:'审贷声明',
        code:'approvalStatement',
        group:true,
        allFormItem:{
          approvalStatementDesc:'wwww',
        },
        props:{
          children: [
            {
              name: '文字说明',
              code: 'desc',
              props: {
                type: 'richText',
                required: true,
                label: '热热热热热',
                value: `
                  <div class="div_class">
                    <h1>自定义说明</h1>
                    <p class="p">
                      Life is&nbsp;<i>like</i>&nbsp;a box of
                      <b>&nbsp;chocolates</b>.
                    </p>  
                  </div>
                  `,
              },
            },
          ]
        }
      }
    ]
  }
]