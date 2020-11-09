 const templates = {
     home: `<div id="home" class="active">
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium deleniti, labore maxime odit quasi delectus soluta fugiat cum, veniam voluptate libero quae saepe modi unde rem, natus aliquam accusamus adipisci.
                </p>
                <img alt="imagen" src="https://picsum.photos/500/300"/>
                            </div>`,
     projects: `<div id="projects">
                <h1>
                    Projects
                </h1>
                <img alt="imagen" src="https://picsum.photos/200/300"/>
                <img alt="imagen" src="https://picsum.photos/200/300"/>
                <img alt="imagen" src="https://picsum.photos/200/300"/>
                    </div>`,
     contact: `<div id="contact">
                <h1>
                    Contact
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, corporis rerum officiis, illum enim dicta. Aut laudantium, ad voluptatem sit suscipit voluptates officiis tempora dolorum autem quidem nam optio fugiat! Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>`
 }
 let app = new Vue({
     el: "#app",
     data: {
         view: "home"
     },
     components: {
         home: {
             props: [],
             template: templates.home
         },
         projects: {
             props: [],
             template: templates.projects
         },
         contact: {
             props: [],
             template: templates.contact
         }
     }
 })