// env.d.ts
/// <reference types="vite/client" />

// vue 类型文件声明
declare module "*.vue" {
  import { defineComponent } from "vue";
  const Component: ReturnType<typeof defineComponent>;
  export default Component;
}
