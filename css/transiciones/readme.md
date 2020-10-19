## Transiciones en CSS

Las transiciones permiten cambiar los valores de las propiedades (de un valor a otro), durante una duración determinada, son el efecto de un cambio en el estado de un elemento de forma gradual en un intervalo de tiempo.


### Sintaxis

Podemos definir las propiedades individuales de transición o usar la propiedad abreviada.

Utilizando las propiedades individuales:
```css
selector {
    transition-property: <prop> | all | none;
    transition-duration: s | ms;
    transition-delay: s | ms;
    transition-timing-function: linear | ease | ease-in | ease-out | ease-in-out | cubic-bezier() | step-end | steps();
}
```

Utilizando la propiedad abreviada:
```css
selector {
   transition: width 2s 500ms ease-in;
}
```
