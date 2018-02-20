import {h} from 'hyperapp';

const colorsDark = [
  {
    class: 'title__black',
    value: '@black 85%'
  },
  {
    class: 'primary-text__black',
    value: '@black 65%'
  },
  {
    class: 'secondary-text__black',
    value: '@black 45%'
  },
  {
    class: 'disable__black',
    value: '@black 25%'
  },
  {
    class: 'border__black',
    value: '@black 15%'
  },
  {
    class: 'dividers__black',
    value: '@black 9%'
  },
  {
    class: 'bg__black',
    value: '@black 4%'
  },
  {
    class: 'table-header__black',
    value: '@black 2%'
  }
];

const colorsLight = [
  {
    class: 'title__light',
    value: '@white 100%'
  },
  {
    class: 'primary-text__light',
    value: '@white 85%'
  },
  {
    class: 'secondary-text__light',
    value: '@white 65%'
  },
  {
    class: 'disable__light',
    value: '@white 45%'
  },
  {
    class: 'border__light',
    value: '@white 25%'
  },
  {
    class: 'dividers__light',
    value: '@white 15%'
  },
  {
    class: 'bg__light',
    value: '@white 9%'
  },
  {
    class: 'table-header__light',
    value: '@white 4%'
  }
];

export const ColorComponents = ({className}) =>
  <div class={`color-component ${className}`}>
    <ul class="list">
      {
        colorsDark.map(list =>
          <li class={`${list.class} item`} key={list.value}>
            <div class="item-inner">
              {list.class} - {list.value}
            </div>
          </li>)
      }
    </ul>

    <ul class="list dark">
      {
        colorsLight.map(list => 
        <li class={`${list.class} item`} key={list.value}>
          <div class="item-inner">
            {list.class} - {list.value}
          </div>
        </li>)
      }
    </ul>
  </div>