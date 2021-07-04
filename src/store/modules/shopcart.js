const state = {
    item:[]
}

export default {
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}

const actions = {
    add (context,item) {
        context.commit('add',item)
    },
    del (context,id) {
        context.commit('del',id)
    }
}
const mutations = {
    add (state,item) {
        const v = state.items.find(v => v.id === item.id)
        if (v) {
            ++v.num
        } else {
            state.items.push({
                id:item.id,
                title:item.title,
                price: item.price,
                src: item.src,
                num: 1
            })
        }
    },
    del (state,id) {
        state.items.forEach((item, index,arr) => {
            if (item.id === id) {
                arr.splice(insex,1)
            }
        })
    }
}

const getters ={
    totalPrice: (state) => {
        return state.items.reduce((total,item) => {
            return total + item.price * item.num
        },0).toFixed(2)
    }
}