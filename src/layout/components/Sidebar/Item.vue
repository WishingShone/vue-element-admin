<script>
export default {
  name: 'MenuItem',
  functional: true,
  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    ishidden: { // 是否显示菜单，默认false为加载菜单
      type: Boolean,
      default: false
    }
  },
  render(h, context) {
    const { icon, title, ishidden } = context.props
    const vnodes = []
    if (!ishidden) {
      if (icon) {
        vnodes.push(<svg-icon icon-class={icon}/>)
      }

      if (title) {
        vnodes.push(<span slot='title'>{(title)}</span>)
      }
      return vnodes
    } else {
      return null
    }
  }
}
</script>
