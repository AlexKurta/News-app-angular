import { Directive, ElementRef, Renderer2, HostListener } from "@angular/core";

@Directive({
  selector: "[appShowDescription]"
})
export class ShowDescriptionDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  @HostListener("click", ["$event"]) onclick(e: MouseEvent) {
    console.log(e);

    const description = this.element.nativeElement.nextElementSibling;
    const state = description.hidden;
    this.renderer.setProperty(description, "hidden", !state);
    this.renderer.listen(description, "click", e => {
      console.log(e);
    });
  }

  @HostListener("mouseenter") onMouseEnter() {
    this.renderer.setStyle(this.element.nativeElement, "cursor", "pointer");
  }
}
