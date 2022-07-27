# assesment-frontend-ab

Assesment Frontend
Due Jul 31, 2022
El objetivo de esta misión es poner en práctica lo que has aprendido en el programa. Los temas que se cubrirán son: Scrum, Git, HTML y CSS, JavaScript y React.

La misión consta de dos partes: primero deberás construir un proyecto en React y después deberás responder una serie de preguntas. En el reporte de la misión deberás agregar el link al repositorio del proyecto y las respuestas a las preguntas.

La fecha limite para la entrega será el domingo 31 de Julio.

1. Proyecto
Construir una aplicación web la cual consta de tres páginas:

Home
Product Detail
About
La aplicación debe tener un menú que le permita al usuario navegar entre estas páginas.

Requerimientos
Usar Flexbox CSS.
El proyecto debe tener configurado ESLint y el Prettier y que tus archivos no tengan problemas con estos.
El código del proyecto debe estar en un repositorio público de tu autoría.
Bonus: Implementar tu CSS con BEM o módulos de CSS.
Home Page
Esta página tendrá la responsabilidad de listar una serie de productos que debes obtener consumiendo la api de Fake Store API.

Para mostrar estos productos debes crear un componente llamada ProductCard el cual tendrá como propiedades id, title, image las cuales tienen que estar renderizadas. Este componente tiene la particularidad de permitir ir al detalle del producto en otra página (http://localhost:3000/detalle/:id) en la cual se debe renderizar toda la información del producto en detalle de forma visualmente agradable.

{
  "id": 1,
  "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  "price": 109.95,
  "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  "category": "men's clothing",
  "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  "rating": {
    "rate": 3.9,
    "count": 120
  }
}
Además el componente ProductCard solo debe permitir ir a la página de detalle siempre y cuando un tiempo random configurado de forma aleatoria no se haya vencido. El tiempo restante debe mostrarse en pantalla como una cuenta regresiva para actualizarse cada segundo.

Ejemplos:

ProductCard-1: Tiene un tiempo máximo para ir al detalle de 1 min, cuando el tiempo finalice este Card no debe permitir realizar una navegación.
ProductCard-2: Tiene un tiempo máximo para ir al detalle de 3 min, cuando el tiempo finalice este Card no debe permitir realizar una navegación.
ProductCard-3: Tiene un tiempo máximo para ir al detalle de 1 min, cuando el tiempo finalice este Card no debe permitir realizar una navegación.
Este es un ejemplo aproximado de lo que debes hacer:

example

Product detail Page
Renderizar la información del producto y permitir navegar a la página de inicio o la del perfil.

About Page
Debes mostrar en esta pantalla tu información personal:

Nombre
Descripción
Imagen
Lista de 3 cosas que hayas aprendido en este programa
Correo
Link a tu github
2. Preguntas
1 ¿Cuáles son las ceremonias más importantes de un Sprint y cuál es la idea de cada una?
2 ¿Qué son los Wireframes? Nombra al menos una herramienta que podamos utilizar.
3 Explicar la diferencia entre var, let y const. Y dar un ejemplo en qué caso se utilizará.
4 ¿Cuáles son los tres comandos que se pueden utilizar para crear una nueva rama llamada rama-1?
5 Explicar la diferencia entre git merge y git rebase.
6 ¿Cuál es la diferencia entre Pull Request (PR) y el comando git pull?
7 ¿Qué es el Virtual DOM?
8 Dado el siguiente codePen, el cual solo tiene un HTML, por medio de css llegar a esta respuesta. Imagen. (Para mostrar los servicios debes usar CSS Flexbox o CSS Grid).
https://codepen.io/cristian-makeitreal/pen/NWadqqa?editors=1100

## assesment-frontend-ab
# 1  ¿Cuáles son las ceremonias más importantes de un Sprint y cuál es la idea de cada una?
  las ceremonias de escrum son reuniones para organizar al equipo y el trabajo en diferentes etapas del proceso, existen 4.
  - sprint planning: saber que tareas del backlog se van a realizar en el sprint
  - daily standup/daily scrum: la reunion diaria donde cada integrante del equipo cuenta  en que está trabajando, que novedades han ocurrido, posibles bloqueos y cual será su próximo trabajo.
  - sprint review: es la reunión para sosializar como se desempeño el equipo en el último sprint, se presentan los resultados del trabajo realizado en el sprint y en compañia de los stakeholder se re organiza el backlog para el siguiente sprint.
  -sprint retrospective: Es la autoevaluación que hace el elquipo para saber que problemas se solucionaron y como, cuales no y por que. Se busca planear mejores formas de incrementar calidad y efectividad.

# 2 ¿Qué son los Wireframes? Nombra al menos una herramienta que podamos utilizar.
  los Wireframes son diseños del aspecto de una pagina web/aplicación, que tienen la ubicación de los componentes ya diseñados. Conocimos por medio de la página de Jira para usar en el proyecto grupal y clonar el aspecto y dimensiones. otras herramientas pueden ser Adobe xd, Sketch, InVIsion.

# 3 Explicar la diferencia entre var, let y const. Y dar un ejemplo en qué caso se utilizará.
  En el lenguaje de programación javaScript, se guarda información con el uso de variables, var fue la primera para definir una variable, su scope es global y puede presentara problemas al sobre escribirse sin intención. let es una variable que puede mutar como  let count cuando count va a representar diferentes valores cada vez. mientras que const es una constante que no se puede sobre escribir.

# 4 ¿Cuáles son los tres comandos que se pueden utilizar para crear una nueva rama llamada rama-1?
-crea una nueva rama y se pasa a esa rama
```git checkout -b rama-1```
-crea una nueva rama
```- git branch rama-1 ```
pasar a la rama nueva:
```git checkout rama-1```
-si ya existe el repositorio en github  se puede crear la rama directamente
  escoger la rama main/master para el menu desplegable y desde ahi encontrar o crear una rama

# 5 Explicar la diferencia entre git merge y git rebase.
  para el control de versiones de git los cambios se van guardando en commits, fotografias del estado de un proyecto. cuando se hace el comando git merge: los commits se agregan a la linea de tiempo de la rama del repositorio mientras que con el comando git rebase los commits locales van al final de la rama del repositorio.

# 6 ¿Cuál es la diferencia entre Pull Request (PR) y el comando git pull?
  el comando git pull manda los cambios/commits al repositorio y el pull request se hace para revisar si los cambios están funcionando y listos para ser integrados al repositorio. Esto lo aprueba un reviwer del equipo.

# 7 ¿Qué es el Virtual DOM?
  virtual Document Object Model es un modelo en el navegador de los archivos de una pagina. La pagina existe en HTML con sus partes o nodos y en el navegador por medio de librerias-interfaz como react tiene un DOM manipulable para hacer cambios por medio de un lenguaje de programación com JavaScript.

# 8 Dado el siguiente codePen, el cual solo tiene un HTML, por medio de css llegar a esta respuesta. Imagen. (Para mostrar los servicios debes usar CSS Flexbox o CSS Grid).

