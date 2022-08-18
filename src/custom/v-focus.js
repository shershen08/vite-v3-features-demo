const myDirective = {
    mounted: function(el){
        el.focus()
    },
    updated: function(el, binding){
        const MIN = 100 
        const minVal = binding.value || MIN;
        if (el.value.length <= minVal) {
            el.style.borderBottom = '3px solid red'
        } else {
            el.style.borderBottom = ''
        }
    }
}
export default myDirective