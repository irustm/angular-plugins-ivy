# Angular Plugins Ivy

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.0-rc.4.

## webpack dynamic loader


```ts

dynamic import plugin

const load = plugin => import(`./${plugin}/${plugin}.module`);

declare const __webpack_require__: any;

// only specific webpack require ensure
const loaderModule: any = (id, src, mod) => __webpack_require__.e(id).then(el => __webpack_require__(src)[mod]);

// plugin = route 
const loaderRouteModule = () => {
  const config = plugins.find(p => p.route === location.pathname);
  return loaderModule(config.chunk, config.src, config.name);
};

const routes: Routes = [
  {
    path: ':pluginId',
    loadChildren: async () => {
      return loaderRouteModule();
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

```

 Config

```ts

const plugins = [
   {
    route: '/one',
    chunk: 0,
    src: './src/app/plugin-one/plugin-one.module.ts',
    name: 'PluginOneModule',
  },
  {
    route: '/two',
    chunk: 1,
    src: './src/app/plugin-two/plugin-two.module.ts',
    name: 'PluginTwoModule',
  }
];

```
