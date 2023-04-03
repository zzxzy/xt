const tableColumn = [{
        label: "姓名",
        prop: 'username'
    },
    {
        label: "邮箱",
        prop: 'email'
    },
    {
        label: "电话",
        prop: 'mobile'
    },
    {
        label: "状态",
        prop: 'mg_state'
    },
    {
        label: "角色",
        prop: 'role_name'
    },
    {
        label: "操作",
        prop: "operation",
        // render 自定义的
        render: (h, params) => {
            return h('div', [
                h('a', {
                    domProps: {
                        innerHTML: "编辑"
                    },
                    style: {
                        marginRight: "10px",
                    },
                    on: {
                        click: () => {}
                    }
                }),
                h('a', {
                    domProps: {
                        innerHTML: "删除"
                    },
                    style: {
                        marginRight: "10px",
                    },
                    on: {
                        click: () => {
                            this.delItems(params.row.id)
                        }
                    }
                })
            ])
        }
    }
]

export default tableColumn;