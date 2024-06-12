import { ApplicationRef } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { createApplication } from '@angular/platform-browser';
import { LocationElement } from './app/location.element';

(async () => {
  const app: ApplicationRef = await createApplication({ providers: [] });
  const injector = app.injector;

  const locationElement = createCustomElement(LocationElement, { injector });
  customElements.define('mst-location', locationElement);
})();
