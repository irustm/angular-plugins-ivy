import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// TODO: http app initializer
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
const load = plugin => import(`./${plugin}/${plugin}.module`);
declare const __webpack_require__: any;
const loaderModule: any = (id, src, mod) => __webpack_require__.e(id).then(el => __webpack_require__(src)[mod]);

//
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
