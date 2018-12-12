import Vue from 'vue'

class Store<S> {
  private instance: Vue

  constructor(initialState: State) {
    this.instance = new Vue({
      data: Object.assign({}, initialState)
    })
  }

  get state(): State {
    return (this.instance.$data as any) as State
  }

  get count(): number {
    return this.state.count
  }

  increment() {
    this.instance.$data.count++
  }
}

export interface State {
  count: number
}

export class AppStore extends Store<State> {}
