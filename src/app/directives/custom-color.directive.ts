import { Directive, ElementRef, Renderer2, Input } from "@angular/core";

@Directive({
  selector: "[appCustomColor]"
})
export class CustomColorDirective {
  @Input() message;

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.element.nativeElement.textContent += this.message;
  }

  @Input("appCustomColor") set newColor(color) {
    this.renderer.setStyle(this.element.nativeElement, "color", color);
  }
}
