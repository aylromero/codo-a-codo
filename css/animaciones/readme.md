## Las animaciones

Las animaciones permiten animar la transición entre un estilo CSS y otro. 

### Sintaxis

Al igual que las transiciones se puede definir las propiedades individuales o usar la propiedad abreviada.

Utilizando las propiedades individuales:
```css
selector {
    animation-name: <nombre d>;
    animation-duration: s | ms;
    animation-timing-function: linear | ease | ease-in | ease-out | ease-in-out | cubic-bezier() | step-end | steps();;
    animation-delay: s | ms;
    animation-iteration-count: <número> | infinite | 1;
    animation-direction: normal | reverse | alternate | alternate-reverse;
    animation-fill-mode: forwards | backwards | both | none;
    animation-play-state: running | paused;
}
```

Utilizando la propiedad abreviada:
```css
selector {
  animation: <nombre del keyframe> 5s linear 0.2s infinite alternate both;
}
```

### Keyframes

A diferencia de las transiciones no se espera a que suceda un cambio en el estado del elemento. Por eso para usar animaciones necesitamos *keyframes* que describirán el comportamiento que tendrá la animación durante su periodo de ejecución.

Se definen de la siguiente manera:

```css
@keyframes <nombre que hayamos puesto en animation-name {
    0% {
        width: 10vw;
        height: 10vh;
        background-color: red;
	}
    25% {
        width: 20vw;
        height: 20vh;
        background-color: pink;
    }
    50% {
        width: 50vw;
        height: 50vh;
        background-color: purple;
    }
    75% {
        width: 70vw;
        height: 70vh;
        background-color: blue;
    }
    100% {
        width: 100vw;
        height: 100vh;
        background-color: lightblue;
    }
}

