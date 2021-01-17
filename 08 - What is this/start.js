(() => {
  // เริ่มเขียนโค้ด

  // 1. Lexical scope & Dynamic scope
  // function printName() {
  //   console.log(this)
  // }
  // printName()


  // 2. How to know what is "this"?
  // function printName() {
  //   console.log(this)
  //   console.log('my name is: ', this.name)
  // }

  //// 2.1 Invoker object
  // const tanawut = { name: 'tanawut', printName }
  // const jane = { name: 'janne', printName }
  // tanawut.printName()
  // jane.printName()
  // //// 2.2 Global object (window, global)

  // name = 'Global'
  // printName()

  //// 2.3 Constructor function

  // function Person(name) {
  //   this.name = name
  //   this.printName = printName
  // }

  // const tanawut = new Person('Tanawut')
  // tanawut.printName()

  // 3. call(), apply(), and bind()

  function printName(nationality, city) {
    console.log(this)
    console.log(`My name is ${this.name}, I'm ${nationality} and am living in ${city}`)
  }
  function Person(name, nationality, city) {
    this.name = name
    this.nationality = nationality
    this.city = city
    printName(this.nationality, this.city)
    printName.call(this, this.nationality, this.city)
    printName.apply(this, [this.nationality, this.city])
    const prinBig = printName.bind(this)
    prinBig(this.nationality, this.city)
  }
  const big = new Person('Big', 'Thai', 'Chonburi')
})();
