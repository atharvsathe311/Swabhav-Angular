import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  name:string = "Atharv";


  getUsername() {
    return "Prasad"
  }

  link = "http://www.google.com";
  imageurl = "https://c4.wallpaperflare.com/wallpaper/586/603/742/minimalism-4k-for-mac-desktop-wallpaper-preview.jpg";
  height = 200;
  width = 500;

  disabled = false;
  message = "";

  // Event Binding
  
  OnClick() {
    if(this.disabled)
    {
      this.disabled = false;
      return;
    }
    this.disabled=true;
  }

  OnClick1() {
    if (this.name == "Atharv") {
      this.name = "Prasad";
      return;
    }
    this.name = "Atharv"
  }

  count = 0

  IncrementCounter() {

    if (this.count < 15) {
      this.count++;
      return;
    }
    alert("Max Count Reached");

  }

  DecrementCounter() {
    if (this.count > 0) {
      this.count--;
      return;
    }
    alert("Minimum Count Reached");
  }

  Reset() {
    this.count = 0;
  }

  // OnLocalRef(value:string)
  // {
  //   this.name = value;
  // }

  @ViewChild('box') boxRef!: ElementRef;
  OnLocalRef()
  {
    this.name = this.boxRef.nativeElement.value;
  }

}
