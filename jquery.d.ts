import * as $ from 'jquery';

declare module 'jquery' {
  interface JQuery {
    modal(action: string): this; // Puedes personalizar el tipo según lo que necesites
  }
}
