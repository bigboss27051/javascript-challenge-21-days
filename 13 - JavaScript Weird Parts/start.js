(() => {
  // เริ่มเขียนโค้ด

  // 1. NaN
  // if(NaN === NaN) {
  //   console.log('Equal')
  // }
  // const result = 1 / 'ok'
  // if(Number.isNaN(result)) {
  //   console.log('Equal NaN')
  // }
  // 2. Type Coercion

  // (true > 1)
  // (1 > 1) false
  if (3 > 2 > 1) {
    console.log('inside')
  }

  //js change string to number
  //how to fix: converty type with Numbewr.parseInt('1')
  console.log(2 - '1')
  //js number + string = change number to string
  //how to fix: converty type with Numbewr.parseInt('1')
  console.log(2 + '1')
  //js change true to 1 
  console.log(true + true)
  // 3. Interpreter & Compiler
  function getPerson() {
    return
    {
      name: 'Big'
    }
  }
  console.log(getPerson()) //get undefiend because js add semi colon after return auto when enter(return;)
  //fix it: 
  function getPersonFixed() {
    return {
      name: 'Big'
    }
  }
  console.log(getPersonFixed())
  // 4. Checking Object Type
  const person  = {}
  if (typeof person === 'object' && person != null && !Array.isArray(person)) {
    console.log('Yes Object')
  }


})();
