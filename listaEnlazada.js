class Nodo {
  constructor(dato, enlace = null) {
      this.dato = dato;
      this.enlace = enlace;
  }

  toString() {
      return `${this.dato} => ${this.enlace}`;
  }

  leerDato() {
      return this.dato;
  }

  siguiente() {
      return this.enlace;
  }
}

class Lista {
  constructor() {
      this.primero = null;
  }

  leerPrimero() {
      return this.primero;
  }

  insertarCabezaLista(entrada) {
      const nuevo = new Nodo(entrada, this.primero);
      this.primero = nuevo;
  }

  insertarLista(anterior, entrada) {
      const nuevo = new Nodo(entrada, anterior.enlace);
      anterior.enlace = nuevo;
  }

  eliminar(entrada) {
      let actual = this.primero;
      let anterior = null;

      while (actual !== null && actual.dato !== entrada) {
          anterior = actual;
          actual = actual.enlace;
      }

      if (actual !== null) {
          if (actual === this.primero) {
              this.primero = actual.enlace;
          } else {
              anterior.enlace = actual.enlace;
          }
      }
  }

  buscarLista(destino) {
      let indice = this.primero;
      while (indice !== null) {
          if (indice.dato === destino) {
              return indice;
          }
          indice = indice.enlace;
      }
      return null;
  }

  visualizar() {
      let n = this.primero;
      const elementos = [];
      while (n !== null) {
          elementos.push(n.dato);
          n = n.enlace;
      }
      console.log(elementos.join(' '));
  }

  toString() {
      return `=> ${this.primero}`;
  }

  // Método que invierte el orden de los nodos en la lista enlazada
  // Complejidad: O(n) tiempo, O(1) espacio
  invertir() {
      let anterior = null;
      let actual = this.primero;
      while (actual !== null) {
          let siguiente = actual.enlace;
          actual.enlace = anterior;
          anterior = actual;
          actual = siguiente;
      }
      this.primero = anterior;
  }

  // Método que elimina elementos duplicados de la lista enlazada
  // Complejidad: O(n) tiempo, O(n) espacio adicional usando Set
  eliminarDuplicados() {
      const vistos = new Set();
      let actual = this.primero;
      let anterior = null;
      while (actual !== null) {
          if (vistos.has(actual.dato)) {
              anterior.enlace = actual.enlace;
          } else {
              vistos.add(actual.dato);
              anterior = actual;
          }
          actual = actual.enlace;
      }
  }

  // Método que devuelve el n-ésimo elemento desde el final de la lista
  // Complejidad: O(n) tiempo, O(1) espacio
  obtenerDesdeElFinal(n) {
      let total = 0;
      let temp = this.primero;
      while (temp !== null) {
          total++;
          temp = temp.enlace;
      }
      if (n < 0 || n >= total) return null;
      let objetivo = total - 1 - n;
      let actual = this.primero;
      for (let i = 0; i < objetivo; i++) {
          actual = actual.enlace;
      }
      return actual ? actual.dato : null;
  }
}

const lista = new Lista();
lista.insertarCabezaLista(3);
lista.insertarCabezaLista(2);
lista.insertarCabezaLista(1);

console.log("Lista inicial:");
lista.visualizar();

const nodo2 = lista.buscarLista(2);
if (nodo2) {
  lista.insertarLista(nodo2, 5);
}

console.log("\nDespués de insertar 5 después del 2:");
lista.visualizar();

lista.eliminar(5);
console.log("\nDespués de eliminar el 5:");
lista.visualizar();

lista.eliminar(1);
console.log("\nDespués de eliminar la cabeza (1):");
lista.visualizar();

console.log("\nRepresentación toString:");
console.log(lista.toString());

// Pruebas automáticas y ejemplos de uso
// Prueba: invertir una lista con varios elementos
lista.invertir();
console.log("\nLista invertida:");
lista.visualizar();

// Prueba: eliminar duplicados
lista.insertarCabezaLista(2);
lista.insertarCabezaLista(3);
lista.eliminarDuplicados();
console.log("\nLista tras eliminar duplicados:");
lista.visualizar();

// Prueba: obtener el 1er elemento desde el final
console.log("\nElemento en la posición 1 desde el final:", lista.obtenerDesdeElFinal(1));

// Prueba: obtener desde el final en lista vacía
const listaVacia = new Lista();
console.assert(listaVacia.obtenerDesdeElFinal(0) === null, "Error: debería retornar null en lista vacía");

// Prueba: lista con un solo elemento
const listaUno = new Lista();
listaUno.insertarCabezaLista(99);
console.assert(listaUno.obtenerDesdeElFinal(0) === 99, "Error: debería retornar 99");
