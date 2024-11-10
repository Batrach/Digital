declare module '*.vue' {
    import type { DefineComponent } from 'vue';
    const component: DefineComponent<{}, {}, any>;
    export default component;
  }
  
  declare module '*.svg' {
    const content: any; // Можно заменить на более конкретный тип
    export default content;
  }
  
  declare module '*.png' {
    const src: string;
    export default src;
  }
  
  declare module '*.jpg' {
    const src: string;
    export default src;
  }
  
  declare module '*.jpeg' {
    const src: string;
    export default src;
  }
  
  declare module '*.gif' {
    const src: string;
    export default src;
  }
  
  declare module '*.ico' {
    const src: string;
    export default src;
  }
  
  // Объявление интерфейса Link
  interface Link {
    id: number;
    title: string;
    url: string;
  }