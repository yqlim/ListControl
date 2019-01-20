export default class ListControl extends Array {

  constructor(...items){
    super(...items);

    Object.defineProperties(this, {
      index: {
        value: 0,
        writable: true
      }
    });
  }

  current(){
    return this[this.index];
  }

  next(){
    const i = this.index + 1;

    if (i >= this.length)
      return undefined;

    this.index = i;

    return this.current();
  }

  previous(){
    const i = this.index - 1;

    if (i < 0)
      return undefined;

    this.index = i;

    return this.current();
  }

  first(){
    this.index = 0;
    return this.current();
  }

  last(){
    this.index = this.length - 1;
    return this.current();
  }

}
