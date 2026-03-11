import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from "@angular/router";
import { SideBar } from "../side-bar/side-bar";


@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, RouterModule, SideBar],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {

}
