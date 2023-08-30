interface NavItem {
  text: string;
  link: string;
  key: string;
}

export function renderNavList<T extends NavItem>(list:Array<T>) {
  return list.map((el: T) => {
     return ( <li className="Nav__el" key={`Nav__el_${el.key}`}>
       <a href={el.link}>{el.text}</a>
     </li>
     )  
  })
}