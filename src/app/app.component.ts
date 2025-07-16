import { RouterOutlet } from '@angular/router';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {defineCustomElement as defineNesButtonElement} from "@nessie/webcomponents/dist/components/nes-button";
import {defineCustomElement as defineNesInputElement} from "@nessie/webcomponents/dist/components/nes-input";
import {defineCustomElement as defineNesLinkElement} from "@nessie/webcomponents/dist/components/nes-link";

defineNesButtonElement();
defineNesInputElement();
defineNesLinkElement();


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ns_demo';
}
