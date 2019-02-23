import { Directive, TemplateRef, ViewContainerRef, Input } from "@angular/core";

@Directive({
  selector: "[appCustomIf]"
})
export class CustomIfDirective {
  constructor(
    private template: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  @Input("appCustomIf") set myValue(condition) {
    if (condition) {
      this.viewContainer.createEmbeddedView(this.template);
    } else {
      this.viewContainer.clear();
    }
  }
}
