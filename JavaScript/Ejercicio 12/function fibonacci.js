function fibonacci(num) {
    let lista = [1, 1];
  
    if (num <= 2) {
      return lista.slice(0, num);
    }
  
    for (let i = 2; i < num; i++) {
      let nextFib = lista[i - 1] + lista[i - 2];
      lista.push(nextFib);
    }
  
    return lista;
  }

  console.log(fibonacci(6)); 
  