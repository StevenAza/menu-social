import { Component, h } from "@stencil/core";

@Component({
  tag: 'menu-audiencias',
  styleUrl: 'menu-audiencias.scss',
  shadow: true,
})

export class MenuAudiencias {
  menuItems = [
    {
      name: 'Estudiantes',
      src: 'https://www.youtube.com/watch?v=iD2hqWbcE_M&ab_channel=solvetic.com'
    },
    {
      name: 'Padres',
      src: 'https://www.youtube.com/watch?v=iD2hqWbcE_M&ab_channel=solvetic.com'
    },
    {
      name: 'Profesores',
      src: 'https://www.youtube.com/watch?v=iD2hqWbcE_M&ab_channel=solvetic.com'
    },
    {
      name: 'Administrativos',
      src: 'https://www.youtube.com/watch?v=iD2hqWbcE_M&ab_channel=solvetic.com'
    }
  ]
  render() {
    return (
        <ul class="menu-audiencias">
            {
              this.menuItems.map((item) => 
                <li class="menu-audiencias__item">
                  <a href={item.src}>{item.name}</a>
                </li>
              )}
        </ul>
    );
  }
}